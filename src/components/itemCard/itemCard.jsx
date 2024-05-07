import Image from "next/image"
import styles from "./itemCard.module.css"
import Link from "next/link"

const ItemCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="/product/omnisphere.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.02.2024</span>
      </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis beatae totam dolorum ducimus quisquam, repellendus necessitatibus quasi provident saepe, ea earum exercitationem suscipit amet laudantium optio fugit? Placeat, quam nulla!</p>
            <Link className={styles.link} href='/shop/post'>READ MORE</Link>
        </div>
    </div>
  )
}

export default ItemCard
