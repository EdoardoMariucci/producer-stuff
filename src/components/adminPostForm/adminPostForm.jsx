import { getUserAll } from "@/lib/prisma";
import styles from "./adminPostForm.module.css";

const AdminPostForm = async () => {

  const users = await getUserAll();

  return (
    <form action="/api/addPack" method="post" className={styles.container}>
      <h1>Add New Pack</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="body" placeholder="Description" rows={10} />
      <input type="text" name="imgSrc" placeholder="Image Surce" defaultValue="/product/"/>
      <input type="text" name="prvSrc" placeholder="Preview Surce" defaultValue="/preview/" />
      <input type="text" name="price" placeholder="Price" />
      <select name="userId"> {/*metodo brutto ma funziona*/}
      <option defaultValue="Seleziona un producer" >Seleziona un producer</option>
        {users.map((user) => (
            <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

export default AdminPostForm