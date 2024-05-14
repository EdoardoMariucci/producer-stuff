import styles from "./adminUsers.module.css";

import { getUserAll } from "@/lib/prisma";
import Image from "next/image";

const AdminUsers = async () => {

    const users = await getUserAll();
    
    return (
      <div className={styles.container}>
        <h1>Producers</h1>
        {users.map((user) => (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              {<Image
                src={user.img || "/system/noavatar.png"}
                alt=""
                width={50}
                height={50}
              />}
              <span>{user.name}</span>
            </div>
            <form action="/api/deleteUser" method="post" >
              <input type="hidden" name="id" value={user.id} />
              <button type="submit" className={styles.userButton}>Elimina</button>
            </form>
          </div>
        ))}
      </div>
    )
}

export default AdminUsers