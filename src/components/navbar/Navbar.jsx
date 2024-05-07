import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Produccer Stuff (logo)</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar