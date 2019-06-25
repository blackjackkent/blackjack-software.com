---
layout: post
title: Clean Control Flow in .NET Core Controllers Using Custom Exceptions
categories: [programming]
tags: [c#,.net core,architecture,api]
fullview: true
---

Controllers in a .NET Core API (or any system employing a controller-based architecture) are the central orchestration class of all behavior that the API manages. Each method in a controller is responsible for receiving and parsing a particular type of operation that a client might request, then passing that request off to the appropriate handling code. When the request has been handled, the controller packages up the resulting data and returns it to the client.

Ideally, a controller class should be extremely simple. It should contain no business logic of its own and only pass data between other portions of the application. However, the real demands of actual software development in the real world means that a controller must manage a certain amount of control flow based on the potential different results of any given requests - and it's easy to let your ostensibly clean orchestration code get very messy. How do we go about handling all of our edge cases while keeping our controller classes crisp and readable?

As an example, let's say we're working with a simple API that lets users manage information about their computers. Here is an example of a basic CRUD PUT controller method in its most ideal state:

{% highlight c# %}
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class ComputerController : Controller {
	private readonly IComputerService _computerService;
	private readonly IComputerRepository _computerRepository;
	public ComputerController(IComputerService computerService, IComputerRepository computerRepository)
	{
		_computerService = computerService;
		_computerRepository = computerRepository;
	}
	
	public IActionResult Put([FromBody] Computer computer)
	{
		var result = _computerService.UpdateComputer(computer, UserId, _computerRepository);
		return Ok(result);
	}
} 
{% endhighlight %}

Very simple, very clean. Our dependencies are injected in the controller constructor, and all the actual logic for updating the user's information takes place in the IComputerService implementation.

Of course, this code makes a lot of assumptions that you can't afford to making in the real world. Off the top of my head, there are at least four potential cases for the user experience that we might want to handle here:

* The request might succeed.
* The provided computer data might be invalid.
* The user might not be authorized to update this particular computer.
* There might be an unexpected error.

All right - let's update this controller so that it handles those edge cases while still keeping our logic in the service:

{% highlight c# %}
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class ComputerController : Controller {
	private readonly IComputerService _computerService;
	private readonly IComputerRepository _computerRepository;
	public ComputerController(IComputerService computerService, IComputerRepository computerRepository)
	{
		_computerService = computerService;
		_computerRepository = computerRepository;
	}
	
	public IActionResult Put([FromBody] Computer computer)
	{
		var isValid = _computerService.IsComputerValid(computer);
		if (!isValid) {
			return BadRequest("This computer is invalid.");
		}
		var isOwnedByUser = _computerService.IsOwnedByUser(computer, UserId);
		if (!isOwnedByUser) {
			return BadRequest("You are not authorized to update this computer.");
		}
		try {
			var result = _computerService.UpdateComputer(computer, UserId, _computerRepository);
			return Ok(result);
		} catch (Exception e) {
			return StatusCode(500, "An unexpected error occurred.");
		}
	}
}
{% endhighlight %}

Well, that covers the edge cases. But it's a lot longer, and takes a little bit of staring at in order to figure out what the potential outcomes of this function are. We've definitely stepped away from that clean readability of our initial version, even though we're making necessary changes. Is there a way to clean this up?

In my experience, the secret to handling this situation effectively lies in that try/catch block that we introduced to handle the "Unexpected Error" case. What if we had other customized exception types specifically for all of our potential error cases?

{% highlight c# %}
public class InvalidComputerException : Exception
{
	public InvalidComputerException() : base("The supplied computer information is invalid.")
	{
	}
}

public class UnauthorizedRequestException : Exception
{
	public UnauthorizedRequestException() : base("The current user is not authorized to make this request.")
	{
	}
}
{% endhighlight %}

These classes inherit the base Exception class and can thus be caught just like any built-in C# exception. Thus, we can imagine a potential implementation of our IComputerService:

{% highlight c# %}
public class ComputerService : IComputerService {
	public Computer UpdateComputer(Computer computer, string userId, IComputerRepository computerRepository) {
		// ...
	}
	
	public void AssertComputerIsValid(Computer computer) {
		var isValid = //....logic here to check computer validity...
		if (!isValid) {
			throw new InvalidComputerException();
		}
	}
	
	public bool AssertComputerBelongsToUser(Computer computer, string userId, IComputerRepository computerRepository) {
		var doesComputerBelongToUser = // ...logic here to check user's authorization...
		if (!doesComputerBelongToUser) {
			throw new UnauthorizedRequestException();
		}
	}
}
{% endhighlight %}

Which would then lead to the following controller implementation:

{% highlight c# %}
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class ComputerController : Controller {
	private readonly IComputerService _computerService;
	private readonly IComputerRepository _computerRepository;
	public ComputerController(IComputerService computerService, IComputerRepository computerRepository)
	{
		_computerService = computerService;
		_computerRepository = computerRepository;
	}
	
	public IActionResult Put([FromBody] Computer computer)
	{
		try {
			_computerService.AssertComputerIsValid(computer);
			_computerService.AssertComputerBelongsToUser(computer, UserId, _computerRepository);
			var result = _computerService.UpdateComputer(computer, UserId, _computerRepository);
			return Ok(result);
		} catch (InvalidComputerException e) {
			return BadRequest("This computer is invalid.");
		} catch (UnauthorizedRequestException e) {
			return BadRequest("You are not authorized to update this computer.");
		} catch (Exception e) {
			return StatusCode(500, "An unexpected error occurred.");
		}
	}
}
{% endhighlight %}

Much better. Not only is this two lines shorter, but it is organized in much more readable fashion - the happy path of the successful update flow is all together at the top of the function, with the potential breaks in the flow listed underneath. It is easy to glance at this function and identify rapidly all the possible outcomes it might lead to.

(This also greatly simplifies testing, since it's easy to determine your test cases entirely based on the list of potential exceptions being fed through the controller.)

All in all, I think this is a helpful, clean way to think about structuring your controllers in .NET Core, as it simplifies the readability of your code and encourages separation of concerns with the handling logic at deeper levels of your application stack.
