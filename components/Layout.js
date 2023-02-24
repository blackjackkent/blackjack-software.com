import Menu from './header/Menu';
import HeaderPhoto from './header/HeaderPhoto';
import SocialLinks from './header/SocialLinks';
import HeaderButtons from './header/HeaderButtons';
import Copyrights from './header/Copyrights';
import styles from './Layout.module.scss';

const Layout = ({ children, title }) => {
	return (
		<div className={styles.page}>
			<div className={styles.pageContent}>
				<header className={`${styles.header} ${styles.mobileMenuHide}`}>
					<HeaderPhoto />
					<Menu />
					<SocialLinks />
					<HeaderButtons />
					<Copyrights />
				</header>

				<div className={styles.menuToggle}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className={styles.contentArea}>
					<div className={styles.contentSections}>
						<section className={styles.contentSection}>
							<div className={styles.sectionContent}>
								{title && (
									<div className={styles.pageTitle}>
										<h2>{title}</h2>
									</div>
								)}
								{children}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Layout;
