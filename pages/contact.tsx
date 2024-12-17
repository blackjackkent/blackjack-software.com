import Head from 'next/head';
import { useState } from 'react';
import LoadingIcons from 'react-loading-icons';
import Layout from '../components/Layout';
import styles from './Contact.module.scss';

type ErrorInfo = {
	name?: boolean;
	email?: boolean;
	subject?: boolean;
	message?: boolean;
};

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<ErrorInfo>({});
	const [isLoading, setIsLoading] = useState(false);

	const [, setShowSuccessMessage] = useState(false);
	const [, setShowFailureMessage] = useState(false);

	const handleValidation = () => {
		const tempErrors: ErrorInfo = {};
		let isValid = true;

		if (!name) {
			tempErrors.name = true;
			isValid = false;
		}
		if (!email) {
			tempErrors.email = true;
			isValid = false;
		}
		if (!subject) {
			tempErrors.subject = true;
			isValid = false;
		}
		if (!message) {
			tempErrors.message = true;
			isValid = false;
		}

		setErrors(tempErrors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowFailureMessage(false);
		setShowSuccessMessage(false);
		setErrors({});
		setIsLoading(true);

		const isValidForm = handleValidation();
		if (!isValidForm) {
			return;
		}

		const res = await fetch('/api/sendEmail', {
			body: JSON.stringify({
				email,
				name,
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
			setShowFailureMessage(true);
			setShowSuccessMessage(false);
			setIsLoading(false);
			return;
		}
		setShowSuccessMessage(true);
		setShowFailureMessage(false);
		setIsLoading(false);
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

					<form id="contact_form" className="contact-form" onSubmit={handleSubmit}>
						<div className="messages" />

						<div className="controls two-columns">
							<div className="fields clearfix">
								<div className="left-column">
									<div className="form-group form-group-with-icon">
										<label htmlFor="name">Full Name</label>
										<input
											id="name"
											type="text"
											name="name"
											className="form-control"
											placeholder=""
											required
											onChange={(e) => setName(e.target.value)}
											data-error="Name is required."
										/>
										<div className="form-control-border" />
										<div className="help-block with-errors">
											{errors.name && 'You must enter a name.'}
										</div>
									</div>

									<div className="form-group form-group-with-icon">
										<label htmlFor="email">Email Address</label>
										<input
											id="email"
											type="email"
											name="email"
											className="form-control"
											placeholder=""
											required
											onChange={(e) => setEmail(e.target.value)}
											data-error="Valid email is required."
										/>
										<div className="form-control-border" />
										<div className="help-block with-errors">
											{errors.email && 'You must enter a valid email.'}
										</div>
									</div>

									<div className="form-group form-group-with-icon">
										<label htmlFor="subject">Subject</label>
										<input
											id="subject"
											type="text"
											name="subject"
											className="form-control"
											placeholder=""
											required
											onChange={(e) => setSubject(e.target.value)}
											data-error="Subject is required."
										/>
										<div className="form-control-border" />
										<div className="help-block with-errors">
											{errors.subject && 'You must enter a subject.'}
										</div>
									</div>
								</div>
								<div className="right-column">
									<div className="form-group form-group-with-icon">
										<label htmlFor="message">Message</label>
										<textarea
											id="message"
											name="message"
											className="form-control"
											placeholder=""
											rows={7}
											required
											onChange={(e) => setMessage(e.target.value)}
											data-error="Please, leave me a message."
										/>
										<div className="form-control-border" />
										<div className="help-block with-errors">
											{errors.message && 'You must enter a message.'}
										</div>
									</div>
								</div>
							</div>

							{/* <div
										className="g-recaptcha"
										data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
										data-theme="dark"
									></div> */}
							<div className={styles.submission}>
								<input
									type="submit"
									className="button btn-send"
									value="Send message"
								/>
								{isLoading && <LoadingIcons.Grid height="50" width="50" />}
							</div>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};
export default Contact;
