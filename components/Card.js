import styles from "../styles/Card.module.scss";
import Link from "next/link";

const Card = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.card}>
      {title}
    </a>
  );
};

export default Card;
