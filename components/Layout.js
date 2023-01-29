import styles from "./Layout.module.scss";
export default function Layout({ children }) {
	return (
		<>
			<div className="page">
				<div className="page-content">
					<header id="site_header" className="header mobile-menu-hide">
						<div className="header-content">
							<div className="header-photo">
								<img src="img/main_photo.jpg" alt="Alex Smith" />
							</div>
							<div className="header-titles">
								<h2>Alex Smith</h2>
								<h4>Web Designer</h4>
							</div>
						</div>

						<ul className="main-menu">
							<li className="active">
								<a href="#home" className="nav-anim">
									<span className="menu-icon lnr lnr-home"></span>
									<span className="link-text">Home</span>
								</a>
							</li>
							<li>
								<a href="#about-me" className="nav-anim">
									<span className="menu-icon lnr lnr-user"></span>
									<span className="link-text">About Me</span>
								</a>
							</li>
							<li>
								<a href="#resume" className="nav-anim">
									<span className="menu-icon lnr lnr-graduation-hat"></span>
									<span className="link-text">Resume</span>
								</a>
							</li>
							<li>
								<a href="#portfolio" className="nav-anim">
									<span className="menu-icon lnr lnr-briefcase"></span>
									<span className="link-text">Portfolio</span>
								</a>
							</li>
							<li>
								<a href="#blog" className="nav-anim">
									<span className="menu-icon lnr lnr-book"></span>
									<span className="link-text">Blog</span>
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

					<div className="lmpixels-arrows-nav">
						<div className="lmpixels-arrow-right">
							<i className="lnr lnr-chevron-right"></i>
						</div>
						<div className="lmpixels-arrow-left">
							<i className="lnr lnr-chevron-left"></i>
						</div>
					</div>

					<div className="content-area">{children}</div>
				</div>
			</div>
		</>
	);
}
