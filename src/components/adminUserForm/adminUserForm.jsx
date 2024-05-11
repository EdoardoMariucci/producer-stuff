import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
    return (
        <form action='' className={styles.container}>
          <h1>Add New User</h1>
          <input type="text" name="title" placeholder="Name" />
          <input type="text" name="imgSrc" placeholder="Image Surce" />
          <button>Add</button>
        </form>
    )
}

export default AdminUserForm