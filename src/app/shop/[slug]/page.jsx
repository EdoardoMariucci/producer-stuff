import { getItem } from '@/lib/data';
import styles from './singleItem.module.css'
import Image from 'next/image'
import ItemUser from '@/components/itemUser/itemUser';
import { Suspense } from 'react';

const SingleItemPage = async ({params}) => {

  const { slug } = params;
  const item = await getItem(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={item?.src} alt="Foto kit" fill className={styles.img}/>
      </div>                                                              
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{item?.title}</h1>
        <div className={styles.detail}>
          {item && 
          (<Suspense fallback={<div>Loading...</div>}>
            <ItemUser userId={item.userId} />
          </Suspense>)}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Price</span>
          <span className={styles.detailValue}>{item?.price}</span>
        </div>
        </div>
        <div className={styles.content}> {item?.body} </div>
      </div>
    </div>
  )
}

export default SingleItemPage