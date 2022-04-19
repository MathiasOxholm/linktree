import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <div className={styles.grid}>
            <h2>My work</h2>
            <Card title="Github" url="https://github.com/MathiasOxholm" />
          </div>
          <div className={styles.grid}>
            <h2>{"Let's connect"}</h2>
            <Card
              title="Instagram"
              url="https://www.instagram.com/oxholm.design/"
            />
            <Card title="Twitter" url="https://twitter.com/OxholmDev" />
            <Card
              title="LinkedIn"
              url="https://www.linkedin.com/in/mathiasoxholm/"
            />
          </div>
          <div className={styles.grid}>
            <h2>Contact me</h2>
            <Card title="Email" url="mailto:hi@mathiasoxholm.dk" />
          </div>
          <p className={styles.credit}>Made with ❤️ by oxholm.dev</p>
        </main>
      </div>
    </>
  );
}
