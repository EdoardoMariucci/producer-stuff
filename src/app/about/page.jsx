import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About the loopkit</h2>
        <h1 className={styles.title}>
          Are these loops royalty free?
        </h1>
        <p className={styles.desc}>
        The kits on our site are royalty free for online beat leasing and small (under 1 million stream) releases. 
        However, once a release has reached over 1 million streams, the loop must be 
        cleared and the royalties / publishing will be split fairly.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>100 K+</h1>
            <p>Kit sold to our community</p>
          </div>
          <div className={styles.box}>
            <h1>500 K+</h1>
            <p>Users all over the world</p>
          </div>
          <div className={styles.box}>
            <h1>10</h1>
            <p>Years of experience in money laundering</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.svg"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
