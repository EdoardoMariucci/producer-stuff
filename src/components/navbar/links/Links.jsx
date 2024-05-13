'use client';

import styles from './links.module.css'
import NavLink from "./navLink/navLink";
import {useState } from "react";
import Image from "next/image";

import { UserButton, useUser } from "@clerk/clerk-react";

const links = [
  { title: "Home Page", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Shop", path: "/shop" },
];

const Links = () => {

  const [open, setOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  const closeMobileMenu = () => {
    setOpen(false);
  };

  const isAdmin = user && user.primaryEmailAddress?.emailAddress === "eedoardo.mariucci@gmail.com";

  return (
    <div className={styles.container}>
      <div className={styles.links}> 
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}

      {isSignedIn ? (
        <>  
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <UserButton />
        </>
      ) : (
        <NavLink item={{title:"Login", path:"/sign-in"}} />
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
            <NavLink item={link} key={link.title} onClick={closeMobileMenu} />
          ))}
          
          {isSignedIn ? (
          <>  
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <UserButton />
          </>           
          ) : (
            <NavLink item={{title:"Login", path:"/sign-in"}} onClick={closeMobileMenu}/>
          )}
        </div>
      )}
  </div>
  )
}

export default Links