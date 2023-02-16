import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./Home.module.scss";

export default function Resume() {
	return (
		<Layout>
			<Head>
				<title>Blackjack Software - Resume</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section data-id="home" className="content-section start-page">
				<div className="section-content">
					<div className="page-title">
						<h2>Resume</h2>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-7">
							<div className="block-title">
								<h3>Experience</h3>
							</div>

							<div className="timeline timeline-second-style clearfix">
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2023-Present</h5>
										<span className="item-company">Switchboard, Inc.</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Software Engineer</h4>
										<p>
											Front-end development for progressive political campaign
											software.
										</p>
									</div>
								</div>
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2020-2023</h5>
										<span className="item-company">Automattic, Inc.</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Javascript Engineer</h4>
										<p>
											Full-stack Javascript (React) and PHP development
											supporting Wordpress.com and associated services. Operated
											as interim team lead for 6 months, managing a team of five
											other developers.
										</p>
									</div>
								</div>

								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2017-2020</h5>
										<span className="item-company">Rightpoint, LLC</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Senior Software Consultant</h4>
										<p>
											Full-stack cross-platform development on a consulting
											basis. Projects included development of React-based
											websites, maintenance of a .NET web application, and
											Android application development. Also established position
											as one of Rightpoint&apos;s subject-matter experts on
											React and its surrounding ecosystem, giving multiple talks
											and one-on-one support to other developers.
										</p>
									</div>
								</div>

								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2015-2017</h5>
										<span className="item-company">JumpForward, Inc.</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Software Engineer</h4>
										<p>
											Full-stack development of AngularJS and C# WebApi
											greenfield rebuild of financial software designed for
											budget management in college athletics departments.
											Participated in transition of company towards agile
											development processes.
										</p>
									</div>
								</div>

								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2012-2015</h5>
										<span className="item-company">Guaranteed Rate, Inc.</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Junior Web Developer</h4>
										<p>
											Front-end and server-side development, both on legacy PHP
											codebase and on greenfield transition to .NET stack using
											C# WebAPI and AngularJS client-side framework. Engaged in
											agile development workflow for planning processes. Worked
											both solo and in pair-programming contexts to develop new
											features.
										</p>
									</div>
								</div>
							</div>

							<div className="block-title">
								<h3>Education</h3>
							</div>

							<div className="timeline timeline-second-style clearfix">
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2014</h5>
										<span className="item-company">DePaul University</span>{" "}
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">
											Master of Science, Software Engineering
										</h4>
									</div>
								</div>
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">2011</h5>
										<span className="item-company">Goucher College</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">Bachelor of Arts, English</h4>
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

							<div className="timeline timeline-second-style clearfix">
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">July 2020</h5>
										<span className="item-company">Decoupled Days 2020</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">
											"Migrating React Components to Use Hooks"
										</h4>
									</div>
								</div>
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">May 2020</h5>
										<span className="item-company">ForwardJS 2020</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">
											"Git Good - Getting the Most Out of the Git CLI"
										</h4>
									</div>
								</div>
								<div className="timeline-item clearfix">
									<div className="left-part">
										<h5 className="item-period">May 2019</h5>
										<span className="item-company">Chicago Code Camp 2019</span>
									</div>
									<div className="divider"></div>
									<div className="right-part">
										<h4 className="item-title">
											"Intro to Redux State Management in Javascript"
										</h4>
									</div>
								</div>
							</div>

							<div className="white-space-30"></div>

							<div className="block-title">
								<h3>Languages</h3>
							</div>

							<ul className="knowledges">
								<li>Javascript</li>
								<li>C#</li>
								<li>PHP</li>
								<li>HTML/CSS</li>
								<li>SQL</li>
								<li>Java</li>
								<li>Kotlin</li>
							</ul>

							<div className="white-space-30"></div>

							<div className="block-title">
								<h3>Frameworks</h3>
							</div>

							<ul className="knowledges">
								<li>ReactJS</li>
								<li>react-query</li>
								<li>Redux</li>
								<li>CSS-in-JS</li>
								<li>NodeJS</li>
								<li>.NET Core</li>
							</ul>

							<div className="white-space-30"></div>

							<div className="block-title">
								<h3>Testing</h3>
							</div>

							<ul className="knowledges">
								<li>Jest</li>
								<li>Enzyme</li>
								<li>XUnit</li>
								<li>JUnit</li>
							</ul>

							<div className="white-space-30"></div>

							<div className="block-title">
								<h3>Databases</h3>
							</div>

							<ul className="knowledges">
								<li>MSSQL</li>
								<li>MySQL</li>
							</ul>

							<div className="white-space-30"></div>

							<div className="block-title">
								<h3>Technologies</h3>
							</div>

							<ul className="knowledges">
								<li>Git CLI</li>
								<li>Visual Studio Code</li>
								<li>Postman</li>
								<li>Webpack</li>
								<li>Github</li>
							</ul>

							<div className="white-space-30"></div>
						</div>
					</div>

					<div className="white-space-50"></div>
				</div>
			</section>
		</Layout>
	);
}
