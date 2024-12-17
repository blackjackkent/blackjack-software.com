import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './About.module.scss';

const About = () => {
	const now = new Date();
	const birthday = new Date(1989, 6, 5);
	const age = now.getFullYear() - birthday.getFullYear() - 1;
	return (
		<Layout
			title={
				<>
					About <span>Me</span>
				</>
			}
		>
			<Head>
				<title>Blackjack Software - About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="row">
				<div className="col-xs-12 col-sm-7">
					<p>
						Roz for short. She/her. Javascript Engineer. Variety Twitch streamer.
						Writer. Interested in ReactJS, helping people, video games, and napping with
						the cat.
					</p>
					<p>
						I have over a decade of experience in the software industry and my passion
						is in helping people make things happen; sometimes that means making an app
						that makes their lives easier, and sometimes it means teaching them how to
						build the app they want to see in the world.
					</p>
					<p>I want to help you too! Let me know what I can do for you. :)</p>
				</div>

				<div className="col-xs-12 col-sm-5">
					<div className={styles.infoList}>
						<ul>
							<li>
								<span className={styles.title}>Age</span>
								<span className="value">{age}</span>
							</li>

							<li>
								<span className={styles.title}>Residence</span>
								<span className="value">Chicago, IL, USA</span>
							</li>

							<li>
								<span className={styles.title}>e-mail</span>
								<span className="value">rosalind@blackjack-software.com</span>
							</li>

							<li>
								<span className={styles.title}>Phone</span>
								<span className="value">(773) 413-9463</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="white-space-50" />

			<div className="row">
				<div className="col-xs-12 col-sm-12">
					<div className="block-title">
						<h3>
							What <span>I Do</span>
						</h3>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12 col-md-6 col-lg-12 col-xl-6">
					<div className="col-inner">
						<div className="info-list-w-icon">
							<div className={styles.infoBlockWIcon}>
								<div className={styles.ciIcon}>
									<i className="lnr lnr-laptop-phone" />
								</div>
								<div className={styles.ciText}>
									<h4>Web App Development</h4>
									<p>
										If you have a task, a community, or an idea that needs
										software to run smoothly, I can help you make it happen. I
										build and maintain web applications designed to brighten
										your day or ease your load!
									</p>
								</div>
							</div>
						</div>
						<div className="info-list-w-icon">
							<div className={styles.infoBlockWIcon}>
								<div className={styles.ciIcon}>
									<i className="lnr lnr-graduation-hat" />
								</div>

								<div className={styles.ciText}>
									<h4>Software Development Education</h4>
									<p>
										I offer <Link href="/contact">private tutoring</Link> for
										those interested in learning to code, making the complicated
										concepts of software development understandable and
										accessible. If you are interested in learning about software
										development or need help with something you're already
										learning about, reach out to me!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-md-6  col-lg-12 col-xl-6">
					<div className="col-inner">
						<div className="info-list-w-icon">
							<div className={styles.infoBlockWIcon}>
								<div className={styles.ciIcon}>
									<i className="lnr lnr-earth" />
								</div>

								<div className={styles.ciText}>
									<h4>Pro-Bono Web Development</h4>
									<p>
										I offer web development and other technological support
										pro-bono to organizations working for positive change in the
										Chicago area and elsewhere, including but not limited to:
									</p>
									<ul>
										<li>Community and mutual aid groups</li>
										<li>Humanitarian organizations</li>
										<li>Civil rights and advocacy organizations</li>
										<li>Charity and social service organizations</li>
										<li>Environmental organizations</li>
									</ul>
									<p>
										If you work with an organization in need of web dev or tech
										support, please <Link href="/contact">reach out</Link>; I'd
										love to see what I can do to help you!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="white-space-30" />
		</Layout>
	);
};
export default About;
