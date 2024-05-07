import styles from './singleItem.module.css'
import Image from 'next/image'

const SingleItemPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/product/omnisphere.jpg" alt="omni" fill className={styles.img}/>
      </div>                                                              
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/product/omnisphere.jpg" alt="pfp" width={50} height={50} className={styles.avatar}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Autore</span>
          <span className={styles.detailValue}>Uno frocio</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Pubblicato</span>
          <span className={styles.detailValue}>5000$</span>
        </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio rerum enim temporibus officia nihil animi, explicabo amet laborum consequatur? Quas corrupti maiores facilis sapiente ea nostrum porro dolore sequi?
        </div>
      </div>
    </div>
  )
}

export default SingleItemPage