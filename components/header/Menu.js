import Link from "next/link";

const Menu = () => {
	return (
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
				<Link href="/portfolio" className="nav-anim">
					<span className="menu-icon lnr lnr-briefcase"></span>
					<span className="link-text">Portfolio</span>
				</Link>
			</li>
			<li>
				<Link href="/contact" className="nav-anim">
					<span className="menu-icon lnr lnr-envelope"></span>
					<span className="link-text">Contact</span>
				</Link>
			</li>
		</ul>
	);
};
export default Menu;
