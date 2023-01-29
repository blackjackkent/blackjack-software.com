import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./Home.module.scss";

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Blackjack Software - Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section data-id="home" className="content-section start-page">
				<div className="section-content">
					<div className="page-title">
						<h2>Contact</h2>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<div className="lm-info-block gray-default">
								<i className="lnr lnr-map-marker"></i>
								<h4>Chicago, IL</h4>
								<span className="lm-info-block-value"></span>
								<span className="lm-info-block-text"></span>
							</div>

							<div className="lm-info-block gray-default">
								<i className="lnr lnr-phone-handset"></i>
								<h4>(773) 413-9463</h4>
								<span className="lm-info-block-value"></span>
								<span className="lm-info-block-text"></span>
							</div>

							<div className="lm-info-block gray-default">
								<i className="lnr lnr-envelope"></i>
								<h4>rosalind@blackjack-software.com</h4>
								<span className="lm-info-block-value"></span>
								<span className="lm-info-block-text"></span>
							</div>

							<div className="lm-info-block gray-default">
								<i className="lnr lnr-checkmark-circle"></i>
								<h4>Freelance Available</h4>
								<span className="lm-info-block-value"></span>
								<span className="lm-info-block-text"></span>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<div className="block-title">
								<h3>
									How Can I <span>Help You?</span>
								</h3>
							</div>

							<form id="contact_form" className="contact-form">
								<div className="messages"></div>

								<div className="controls two-columns">
									<div className="fields clearfix">
										<div className="left-column">
											<div className="form-group form-group-with-icon">
												<input
													id="form_name"
													type="text"
													name="name"
													className="form-control"
													placeholder=""
													required="required"
													data-error="Name is required."
												/>
												<label>Full Name</label>
												<div className="form-control-border"></div>
												<div className="help-block with-errors"></div>
											</div>

											<div className="form-group form-group-with-icon">
												<input
													id="form_email"
													type="email"
													name="email"
													className="form-control"
													placeholder=""
													required="required"
													data-error="Valid email is required."
												/>
												<label>Email Address</label>
												<div className="form-control-border"></div>
												<div className="help-block with-errors"></div>
											</div>

											<div className="form-group form-group-with-icon">
												<input
													id="form_subject"
													type="text"
													name="subject"
													className="form-control"
													placeholder=""
													required="required"
													data-error="Subject is required."
												/>
												<label>Subject</label>
												<div className="form-control-border"></div>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="right-column">
											<div className="form-group form-group-with-icon">
												<textarea
													id="form_message"
													name="message"
													className="form-control"
													placeholder=""
													rows="7"
													required="required"
													data-error="Please, leave me a message."
												></textarea>
												<label>Message</label>
												<div className="form-control-border"></div>
												<div className="help-block with-errors"></div>
											</div>
										</div>
									</div>

									{/* <div
										className="g-recaptcha"
										data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
										data-theme="dark"
									></div> */}

									<input
										type="submit"
										className="button btn-send"
										value="Send message"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
