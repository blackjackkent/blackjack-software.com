import styles from "./HeaderButtons.module.scss";

const HeaderButtons = () => {
  return (
    <div className={styles.headerButtons}>
      <a href="/contact" className={`btn btn-primary ${styles.primary}`}>
        Contact Me!
      </a>
    </div>
  );
};
export default HeaderButtons;
