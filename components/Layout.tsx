import React, { useState } from 'react';
import Menu from './header/Menu';
import HeaderPhoto from './header/HeaderPhoto';
import SocialLinks from './header/SocialLinks';
import HeaderButtons from './header/HeaderButtons';
import Copyrights from './header/Copyrights';
import styles from './Layout.module.scss';

type LayoutProps = {
	children: React.ReactNode;
	title?: string | React.ReactNode;
};

const Layout = ({ children, title = '' }: LayoutProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className={styles.page}>
			<div className={styles.pageContent}>
				<header className={`${styles.header} ${!isMenuOpen && styles.mobileMenuHide}`}>
					<HeaderPhoto />
					<Menu />
					<SocialLinks />
					<HeaderButtons />
					<Copyrights />
				</header>

				<div
					className={`${styles.menuToggle} ${isMenuOpen && styles.open}`}
					onKeyUp={() => setIsMenuOpen(!isMenuOpen)}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					role="button"
					tabIndex={-1}
				>
					<span />
					<span />
					<span />
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
