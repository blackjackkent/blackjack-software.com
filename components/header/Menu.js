import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = () => {
	return (
		<ul className={styles.mainMenu}>
			<li className={styles.active}>
				<Link href="/" className="nav-anim">
					<span className={`${styles.menuIcon} lnr lnr-home`} />
					<span className={styles.linkText}>Home</span>
				</Link>
			</li>
			<li>
				<Link href="/about" className="nav-anim">
					<span className={`${styles.menuIcon} lnr lnr-user`} />
					<span className={styles.linkText}>About Me</span>
				</Link>
			</li>
			<li>
				<Link href="/resume" className="nav-anim">
					<span className={`${styles.menuIcon} lnr lnr-graduation-hat`} />
					<span className={styles.linkText}>Resume</span>
				</Link>
			</li>
			<li>
				<Link href="/projects" className="nav-anim">
					<span className={`${styles.menuIcon} lnr lnr-briefcase`} />
					<span className={styles.linkText}>Projects</span>
				</Link>
			</li>
			<li>
				<Link href="/contact" className="nav-anim">
					<span className={`${styles.menuIcon} lnr lnr-envelope`} />
					<span className={styles.linkText}>Contact</span>
				</Link>
			</li>
		</ul>
	);
};
export default Menu;
