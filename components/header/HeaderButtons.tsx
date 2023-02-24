import Link from 'next/link';
import styles from './HeaderButtons.module.scss';

const HeaderButtons = () => {
	return (
		<div className={styles.headerButtons}>
			<Link href="/contact" className={`btn btn-primary ${styles.primary}`}>
				Contact Me!
			</Link>
		</div>
	);
};
export default HeaderButtons;
