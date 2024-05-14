import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {

  return (
      <form action="/api/addUser" method="post" className={styles.container}>
        <h1>Aggiungi un nuovo produttore</h1>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="imgSrc" placeholder="Image Surce" defaultValue="/producer/"/>
        <button type="submit">Aggiungi</button>
      </form>
  )
}

export default AdminUserForm