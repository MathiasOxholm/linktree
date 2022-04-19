import Image from "next/image";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profilePicture}>
        <Image
          src="/oxholm.jpg"
          width={200}
          height={200}
          alt="Mathias Oxholm Profile Picture"
        />
      </div>
      <h1 className={styles.title}>Mathias Oxholm</h1>
      <p className={styles.description}>Frontend Developer</p>
    </div>
  );
};

export default Header;
