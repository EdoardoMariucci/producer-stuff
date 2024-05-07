'use client';

import styles from './links.module.css'
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
      title: "Home Page",
      path: "/",
  },
  {
      title: "About",
      path: "/about",
  },
  {
      title: "Contact",
      path: "/contact",
  },
  {
      title: "Shop",
      path: "/shop",
  },
];

const Links = () => {

  const [open, setOpen] = useState(false);

  //Da ignorare
  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}> 
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{title: "Admin", path:"/admin"}}/>}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{title:"Login", path:"/login"}} />
      )}
    </div>

    <Image
        className={styles.menuButton}
        src="/system/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}

  </div>
  )
}

export default Links