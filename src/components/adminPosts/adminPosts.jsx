import styles from "./adminPosts.module.css";

import { getItems } from "@/lib/prisma";
import Image from "next/image";

const AdminPosts = async () => {

    const items = await getItems();

    return (
    <div className={styles.container}>
      <h1>Kits</h1>
      {items.map((item) => (
        <div className={styles.post} key={item.id}>
          <div className={styles.detail}>
            <Image
              src={item.srcImg || "/system/noFotoKit.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{item.title}</span>
          </div>
          <form action="/api/deletePack" method="post" >
            <input type="hidden" name="id" value={item.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
    )
    }

export default AdminPosts