import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.scss";
export default function Layout({ children }) {
	return (
		<>
			<div className="page">
				<div className="page-content">
					<header id="site_header" className="header mobile-menu-hide">
						<div className="header-content">
							<div className="header-photo">
								<Image src="/images/headshot.png" width={180} height={180} />
							</div>
							<div className="header-titles">
								<h2>Blackjack Software</h2>
							</div>
						</div>

						<ul className="main-menu">
							<li className="active">
								<Link href="/" className="nav-anim">
									<span className="menu-icon lnr lnr-home"></span>
									<span className="link-text">Home</span>
								</Link>
							</li>
							<li>
								<Link href="/about" className="nav-anim">
									<span className="menu-icon lnr lnr-user"></span>
									<span className="link-text">About Me</span>
								</Link>
							</li>
							<li>
								<Link href="/resume" className="nav-anim">
									<span className="menu-icon lnr lnr-graduation-hat"></span>
									<span className="link-text">Resume</span>
								</Link>
							</li>
							<li>
								<a href="#portfolio" className="nav-anim">
									<span className="menu-icon lnr lnr-briefcase"></span>
									<span className="link-text">Portfolio</span>
								</a>
							</li>
							<li>
								<a href="#contact" className="nav-anim">
									<span className="menu-icon lnr lnr-envelope"></span>
									<span className="link-text">Contact</span>
								</a>
							</li>
						</ul>

						<div className="social-links">
							<ul>
								<li>
									<a href="#" target="_blank">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>

						<div className="header-buttons">
							<a href="#" target="_blank" className="btn btn-primary">
								Download CV
							</a>
						</div>

						<div className="copyrights">© 2020 All rights reserved.</div>
					</header>

					<div className="menu-toggle">
						<span></span>
						<span></span>
						<span></span>
					</div>

					<div className="content-area">
						<div className="content-sections">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
}
