import Image from "next/image"
import styles from "./itemCard.module.css"
import Link from "next/link"

const ItemCard = ({item}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src={item.src} alt="Foto kit" fill className={styles.img} />
        </div>
        <span className={styles.date}>{item.date}</span>
      </div> 
        <div className={styles.bottom}> 
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
            <Link className={styles.link} href={`/shop/${item?.id}`}>INFO</Link>
        </div>
    </div>
  )
}

export default ItemCard
