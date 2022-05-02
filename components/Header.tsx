import Image from "next/image";
import styles from "../styles/Header.module.scss";

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, description }) => {
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
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Header;
