---
layout: post
title: Managing Simple Global State with React Context
categories: [programming]
tags: [javascript,react]
fullview: true
---

Some of you are probably aware that there has been something of a cultural shift in recent years -- a debate on legalization, if you will.

There's a particular practice that has traditionally been discouraged by the powers-that-be; nevertheless, it's always been out there, if you knew where to look for it, and some people liked to use it anyway despite any ostensible risks, asserting that it made life easier for them. There were even certain cases where it was necessary to reduce pain points. However, most people generally abided by the decision of those in authority and avoided it despite any potential benefits.

However, things have started to change. The system has begun to evolve, and the powers-that-be overseeing the situation have legitimized this practice to the point that anyone, with a little time and effort, can incorporate it into their lives safely.

I'm speaking, of course, of the React Context API. Not sure what you were thinking. ;)

----

The Context API in React goes back to the library's early versions. Its primary purpose has always been to make information from a parent component available to a child component nested multiple levels deep, without having to perform prop forwarding in intermediate components.

Take this example, for instance, from the React legacy docs:

{% highlight jsx %}
class MessageList extends React.Component {
	getChildContext() {
		return {color: "purple"};
	}

	render() {
		const children = this.props.messages.map((message) =>
			<Message text={message.text} />
		);
		return <div>{children}</div>;
	}
}

MessageList.childContextTypes = {
	color: PropTypes.string
};
--------------
class Message extends React.Component {
	render() {
		return (
			<div>
				{this.props.text} <Button>Delete</Button>
			</div>
		);
	}
}
--------------
class Button extends React.Component {
	render() {
		return ({% raw %}
			<button style={{background: this.context.color}}>
				{this.props.children}
			</button>{% endraw %}
		);
	}
}
--------------
Button.contextTypes = {
	color: PropTypes.string
};
{% endhighlight %}

Rather than the `Message` component having to know anything about the `color` property, it is passed directly from `MessageList` to `Button` as part of the context, which is available as a property of `this` in a class component, or a second optional parameter of a functional component. This provides us with the concept of a global state readable by multiple components in the application, albeit a somewhat threadbare one, and eliminates the need for "prop drilling" -- i.e. the ubiquitous passage of a spread `...props` property all the way down the component stack.

However, the necessary syntax for setting and reading the context is somewhat awkward and unintuitive to read. And more importantly, as the legacy docs point out, there is no trustworthy way to update this central context over time. The documentation for the legacy context API comes with this dire warning:

```
React has an API to update context, but it is fundamentally broken and you should not use it.
```

It seems safe to say that for most of React's lifetime, this feature was at best unstable and at worst actively discouraged from use (though it did find utility in libraries like `react-router` and `react-redux`, both major libraries in the React ecosystem).

But times are changing...

----

With the release of React 16.3, the developers of React completely revamped the React context API for stability and developer usability. The new approach takes a much more easily readable form:

{% highlight jsx %}
export const ButtonColorContext = React.createContext({
  buttonColor: 'purple',
  setColor: () => {},
});
--------------
class MessageList extends React.Component {
	constructor(props) {
		super(props);

		this.setColor = (color) => {
			this.setState(state => ({
				buttonColor: color
			}));
		};

		this.state = {
			buttonColor: 'purple',
			setColor: this.setColor,
		};
	}

	render() {
		const children = this.props.messages.map((message) =>
			<Message text={message.text} />
		);
		return (
			<ButtonColorContext.Provider value={this.state}>
				{children}
			</ButtonColorContext.Provider>
		);
	}
}
--------------
class Message extends React.Component {
	render() {
		return (
			<div>{this.props.text} <Button>Delete</Button></div>
		);
	}
}
--------------
class Button extends React.Component {
	render() {
		return ({% raw %}
			<ButtonColorContext.Consumer>
			{({buttonColor, setColor}) => (
					<button style={{background: buttonColor}}>
						{this.props.children}
					</button>
				)}
			</ButtonColorContext.Consumer>
			{% endraw %}
		);
	}
}
{% endhighlight %}

Once again, `Message` has no knowledge of the props being passed from `MessageList` to `Button`, but this time, the React context is created through the use of a simple function call, `React.createContext()`, which is disconnected from any particular component and produces, in a sense, an interface defining the shape the context will take for consuming components further down the UI stack. 

The actual context itself, however, is instantiated inside the `MessageList` component via the use of the `<ButtonColorContext.Provider>` component, which sets the actual value of the context for all child components to be the `state` property of the `MessageList` component. In other words, the loaded context in any child components will be equal to the state of the `MessageList` component, making the `MessageList`'s state an available set of global state values for all code below it.

More importantly, however, the dire warning from previous versions of the React context no longer applies. The context's shape can include (and does, in this instance) a method to update itself, which in this case calls `setState` on the parent `MessageList` component; this change is then automatically propogated all the way down the stack.

It's worth noting, too, that with the advent of hooks allowing developers to maintain state in functional components, no aspect of this is necessarily tied to class components at all.

----

Overall, this new context API provides a lot of exciting value for React developers. In particular, it greatly simplifies the process of maintaining a central state object for many components in your application's hierarchy without cluttering intervening components with prop drilling.

Of course, there's an elephant in the room for many people who have done complex React development in the past -- how does this compare to Redux and other state management approaches? Is it going to squeeze them out?

The answer is...yes and no. There are benefits to both approaches.

The React Context API is a built-in React feature. Consequently, using it for your entire state management solution removes any need for a third-party dependency in that area, and it has a clean, React-idiomatic API that can be easily used at any level in your component hierarchy.

However, it's worth noting that [the API is not designed for data that is updated frequently](https://github.com/facebook/react/issues/14110#issuecomment-448074060). Its greatest strength is in managing data that needs to be centralized for use by the entire application but will not be regularly updated -- for instance, theme information. For more elaborate and fast-moving state management, other third-party solutions may still be a better bet.
