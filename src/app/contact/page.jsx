import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/page/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>

        <form action="" className={styles.form}>
          <input type="text" placeholder="Nome e cognome" />
          <input type="email" placeholder="Indirizzo mail" />
          <input type="text" placeholder="Numero di telefono" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Messaggio"
          ></textarea>
          <button>Invia</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
