import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <>
      <Header title="Mathias Oxholm" description="Frontend Developer" />
      <div className={styles.container}>
        <main>
          <div className={styles.grid}>
            <h2>My work</h2>
            <Card title="Resume" url="https://cv.oxholm.dev" />
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

export default Home;