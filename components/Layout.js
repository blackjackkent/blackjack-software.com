import Menu from "./header/Menu";
import HeaderPhoto from "./header/HeaderPhoto";
import SocialLinks from "./header/SocialLinks";
import HeaderButtons from "./header/HeaderButtons";
import Copyrights from "./header/Copyrights";
export default function Layout({ children }) {
	return (
		<>
			<div className="page">
				<div className="page-content">
					<header id="site_header" className="header mobile-menu-hide">
						<HeaderPhoto />
						<Menu />
						<SocialLinks />
						<HeaderButtons />
						<Copyrights />
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
