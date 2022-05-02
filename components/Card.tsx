import styles from "../styles/Card.module.scss";

interface Props {
  title: string;
  url: string;
}

const Card: React.FC<Props> = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.card}>
      {title}
    </a>
  );
};

export default Card;
