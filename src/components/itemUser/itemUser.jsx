import { getUser } from '@/lib/prisma';
import styles from "./itemUser.module.css";
import Image from "next/image";

const ItemUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/system/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Producer</span>
        <span className={styles.username}>{user.name}</span>
      </div>
    </div>
  );
};

export default ItemUser;
