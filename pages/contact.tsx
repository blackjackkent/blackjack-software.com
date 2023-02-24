import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Contact.module.scss';

const Contact = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isValidForm = handleValidation();

		const res = await fetch('/api/sendgrid', {
			body: JSON.stringify({
				email,
				fullname,
				subject,
				message
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
		console.log(fullname, email, subject, message);
	};

	return (
		<Layout title="Contact">
			<Head>
				<title>Blackjack Software - Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="row">
				<div className="col-xs-12 col-sm-4">
					<div className={`${styles.lmInfoBlock} gray-default`}>
						<i className="lnr lnr-map-marker" />
						<h4>Chicago, IL</h4>
						<span className={styles.lmInfoBlockValue} />
						<span className="lm-info-block-text" />
					</div>

					<div className={`${styles.lmInfoBlock} gray-default`}>
						<i className="lnr lnr-phone-handset" />
						<h4>(773) 413-9463</h4>
						<span className={styles.lmInfoBlockValue} />
						<span className="lm-info-block-text" />
					</div>

					<div className={`${styles.lmInfoBlock} gray-default`}>
						<i className="lnr lnr-envelope" />
						<h4>rosalind@blackjack-software.com</h4>
						<span className={styles.lmInfoBlockValue} />
						<span className="lm-info-block-text" />
					</div>

					<div className={`${styles.lmInfoBlock} gray-default`}>
						<i className="lnr lnr-checkmark-circle" />
						<h4>Freelance Available</h4>
						<span className={styles.lmInfoBlockValue} />
						<span className="lm-info-block-text" />
					</div>
				</div>
				<div className="col-xs-12 col-sm-8">
					<div className="block-title">
						<h3>
							How Can I <span>Help You?</span>
						</h3>
					</div>

					<form id="contact_form" className="contact-form">
						<div className="messages" />

						<div className="controls two-columns">
							<div className="fields clearfix">
								<div className="left-column">
									<div className="form-group form-group-with-icon">
										<input
											id="name"
											type="text"
											name="name"
											className="form-control"
											placeholder=""
											required
											data-error="Name is required."
										/>
										<label htmlFor="name">Full Name</label>
										<div className="form-control-border" />
										<div className="help-block with-errors" />
									</div>

									<div className="form-group form-group-with-icon">
										<input
											id="email"
											type="email"
											name="email"
											className="form-control"
											placeholder=""
											required
											data-error="Valid email is required."
										/>
										<label htmlFor="email">Email Address</label>
										<div className="form-control-border" />
										<div className="help-block with-errors" />
									</div>

									<div className="form-group form-group-with-icon">
										<input
											id="subject"
											type="text"
											name="subject"
											className="form-control"
											placeholder=""
											required
											data-error="Subject is required."
										/>
										<label htmlFor="subject">Subject</label>
										<div className="form-control-border" />
										<div className="help-block with-errors" />
									</div>
								</div>
								<div className="right-column">
									<div className="form-group form-group-with-icon">
										<textarea
											id="message"
											name="message"
											className="form-control"
											placeholder=""
											rows={7}
											required
											data-error="Please, leave me a message."
										/>
										<label htmlFor="message">Message</label>
										<div className="form-control-border" />
										<div className="help-block with-errors" />
									</div>
								</div>
							</div>

							{/* <div
										className="g-recaptcha"
										data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
										data-theme="dark"
									></div> */}

							<input type="submit" className="button btn-send" value="Send message" />
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};
export default Contact;
