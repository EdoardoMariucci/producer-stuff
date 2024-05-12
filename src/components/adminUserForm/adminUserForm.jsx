import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {

  return (
      <form action="/api/addUser" method="post" className={styles.container}>
        <h1>Add New User</h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="imgSrc" placeholder="Image Surce"/>
        <button type="submit">Add</button>
      </form>
  )
}

export default AdminUserForm