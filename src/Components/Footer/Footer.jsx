//CSS
import styles from "./Footer.module.css";

const Footer = () => {

  return (

    <footer className={styles.footer}>
      <h3>Feito por:</h3>
      <a href = "https://portfolio-wesley-santos.netlify.app" target="_blank"><span>W</span>esley Santos</a>
      <p>Um site voltado para estudo e prática.</p>
    </footer>

  );
};

export default Footer;