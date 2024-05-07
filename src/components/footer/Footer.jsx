import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Producer Stuff</div>
      <div className={styles.text}>
        Trasparenti nel riciclo di denaro © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;