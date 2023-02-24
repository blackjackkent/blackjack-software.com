import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './Resume.module.scss';

const Resume = () => {
	return (
		<Layout title="Resume">
			<Head>
				<title>Blackjack Software - Resume</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="row">
				<div className="col-xs-12 col-sm-7">
					<div className="block-title">
						<h3>Experience</h3>
					</div>

					<div className={`timeline ${styles.timelineSecondStyle} clearfix`}>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2023-Present</h5>
								<span className={styles.itemCompany}>Switchboard, Inc.</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Software Engineer</h4>
								<p>
									Front-end development for progressive political campaign
									software.
								</p>
							</div>
						</div>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2020-2023</h5>
								<span className={styles.itemCompany}>Automattic, Inc.</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Javascript Engineer</h4>
								<p>
									Full-stack Javascript (React) and PHP development supporting
									Wordpress.com and associated services. Operated as interim team
									lead for 6 months, managing a team of five other developers.
								</p>
							</div>
						</div>

						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2017-2020</h5>
								<span className={styles.itemCompany}>Rightpoint, LLC</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Senior Software Consultant</h4>
								<p>
									Full-stack cross-platform development on a consulting basis.
									Projects included development of React-based websites,
									maintenance of a .NET web application, and Android application
									development. Also established position as one of
									Rightpoint&apos;s subject-matter experts on React and its
									surrounding ecosystem, giving multiple talks and one-on-one
									support to other developers.
								</p>
							</div>
						</div>

						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2015-2017</h5>
								<span className={styles.itemCompany}>JumpForward, Inc.</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Software Engineer</h4>
								<p>
									Full-stack development of AngularJS and C# WebApi greenfield
									rebuild of financial software designed for budget management in
									college athletics departments. Participated in transition of
									company towards agile development processes.
								</p>
							</div>
						</div>

						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2012-2015</h5>
								<span className={styles.itemCompany}>Guaranteed Rate, Inc.</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Junior Web Developer</h4>
								<p>
									Front-end and server-side development, both on legacy PHP
									codebase and on greenfield transition to .NET stack using C#
									WebAPI and AngularJS client-side framework. Engaged in agile
									development workflow for planning processes. Worked both solo
									and in pair-programming contexts to develop new features.
								</p>
							</div>
						</div>
					</div>

					<div className="block-title">
						<h3>Education</h3>
					</div>

					<div className={`timeline ${styles.timelineSecondStyle} clearfix`}>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2014</h5>
								<span className={styles.itemCompany}>DePaul University</span>{' '}
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>
									Master of Science, Software Engineering
								</h4>
							</div>
						</div>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>2011</h5>
								<span className={styles.itemCompany}>Goucher College</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>Bachelor of Arts, English</h4>
								<p>Minor: Computer Science</p>
							</div>
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-sm-5">
					<div className="block-title">
						<h3>
							Speaking <span>Engagements</span>
						</h3>
					</div>

					<div className={`timeline ${styles.timelineSecondStyle} clearfix`}>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>July 2020</h5>
								<span className={styles.itemCompany}>Decoupled Days 2020</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>
									&quot;Migrating React Components to Use Hooks&quot;
								</h4>
							</div>
						</div>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>May 2020</h5>
								<span className={styles.itemCompany}>ForwardJS 2020</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>
									&quot;Git Good - Getting the Most Out of the Git CLI&quot;
								</h4>
							</div>
						</div>
						<div className={`${styles.timelineItem} clearfix`}>
							<div className={styles.leftPart}>
								<h5 className={styles.itemPeriod}>May 2019</h5>
								<span className={styles.itemCompany}>Chicago Code Camp 2019</span>
							</div>
							<div className={styles.divider} />
							<div className={styles.rightPart}>
								<h4 className={styles.itemTitle}>
									&quot;Intro to Redux State Management in Javascript&quot;
								</h4>
							</div>
						</div>
					</div>

					<div className="white-space-30" />

					<div className="block-title">
						<h3>Languages</h3>
					</div>

					<ul className={styles.knowledges}>
						<li>Javascript</li>
						<li>C#</li>
						<li>PHP</li>
						<li>HTML/CSS</li>
						<li>SQL</li>
						<li>Java</li>
						<li>Kotlin</li>
					</ul>

					<div className="white-space-30" />

					<div className="block-title">
						<h3>Frameworks</h3>
					</div>

					<ul className={styles.knowledges}>
						<li>ReactJS</li>
						<li>react-query</li>
						<li>Redux</li>
						<li>CSS-in-JS</li>
						<li>NodeJS</li>
						<li>.NET Core</li>
					</ul>

					<div className="white-space-30" />

					<div className="block-title">
						<h3>Testing</h3>
					</div>

					<ul className={styles.knowledges}>
						<li>Jest</li>
						<li>Enzyme</li>
						<li>XUnit</li>
						<li>JUnit</li>
					</ul>

					<div className="white-space-30" />

					<div className="block-title">
						<h3>Databases</h3>
					</div>

					<ul className={styles.knowledges}>
						<li>MSSQL</li>
						<li>MySQL</li>
					</ul>

					<div className="white-space-30" />

					<div className="block-title">
						<h3>Technologies</h3>
					</div>

					<ul className={styles.knowledges}>
						<li>Git CLI</li>
						<li>Visual Studio Code</li>
						<li>Postman</li>
						<li>Webpack</li>
						<li>Github</li>
					</ul>

					<div className="white-space-30" />
				</div>
			</div>

			<div className="white-space-50" />
		</Layout>
	);
};
export default Resume;
