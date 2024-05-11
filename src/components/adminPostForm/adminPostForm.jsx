import styles from "./adminPostForm.module.css";

const AdminPostForm = () => {
  return (
    <form action='' className={styles.container}>
      <h1>Add New Pack</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="desc" placeholder="Description" rows={10} />
      <input type="text" name="imgSrc" placeholder="Image Surce" />
      <input type="text" name="price" placeholder="Price" />
      <select />
      <button>Add</button>
    </form>
  )
}

export default AdminPostForm