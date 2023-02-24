import styles from './Copyrights.module.scss';

const Copyrights = () => {
	return (
		<div className={styles.copyrights}>© {new Date().getFullYear()} All rights reserved.</div>
	);
};
export default Copyrights;
