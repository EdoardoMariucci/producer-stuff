import styles from './singleItem.module.css'
import Image from 'next/image'
import { Suspense } from 'react';

import ItemUser from '@/components/itemUser/itemUser';
import { getItemBySlug } from "@/lib/prisma";

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

const SingleItemPage = async ({params}) => {

  const user = await currentUser();
  if (!user) return (redirect('/sign-in'));

  const { slug } = params;
  const item = await getItemBySlug(slug);

  if (!item) return (redirect('/not-found.jsx'));

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={item.srcImg || "/system/noFotoKit.png"} alt="Foto kit" fill className={styles.img}/>
      </div>                                                              
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{item.title}</h1>
        <div className={styles.detail}>
          {item && 
          (<Suspense fallback={<div>Loading...</div>}>
            <ItemUser userId={item.userId} />
          </Suspense>)}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Price</span>
          <span className={styles.detailValue}>{item.price} $</span>
        </div>
        </div>
        <div className={styles.content}> {item.body} </div>
        <audio controls src={item.srcPrv} />
        <a href={item.srcPrv} download className={styles.downloadLink}>
          Download sample pack
        </a>
      </div>
    </div>
  )
}

export default SingleItemPage