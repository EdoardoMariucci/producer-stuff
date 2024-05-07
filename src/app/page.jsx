import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Producer Stuff</h1>
        <p className={styles.desc}>
          Find your sound, unleash your creativity!
          Browse millions of royalty-free one-shots, loops, FX, MIDI, and presets 
          in a sample library deep enough to get lost in. It all starts on Producer Stuff.
        </p>
        <div className={styles.buttons}>
          <Link href='/about' className={styles.button}>Learn More</Link>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/home12.webp" alt="Home foto" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
