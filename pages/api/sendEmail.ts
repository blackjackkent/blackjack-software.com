import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'rosalind@blackjack-software.com', // Your email where you'll receive emails
			from: 'rosalind@blackjack-software.com', // your website email address here
			subject: `${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
      </head>
      
      <body>
        <div>
          <h3>You've got a new mail from ${req.body.name} at ✉️${req.body.email}:</h3>
          <p>${req.body.message}</p>
        </div>
      </body>
      </html>`
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
