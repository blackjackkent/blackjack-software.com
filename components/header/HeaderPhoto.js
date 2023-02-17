import Image from "next/image";
import styles from "./HeaderPhoto.module.scss";

const HeaderPhoto = () => {
  return (
    <div className="header-content">
      <div className={styles.headerPhoto}>
        <Image src="/images/headshot.png" width={180} height={180} />
      </div>
      <div className={styles.headerTitles}>
        <h2>Blackjack Software</h2>
      </div>
    </div>
  );
};
export default HeaderPhoto;
