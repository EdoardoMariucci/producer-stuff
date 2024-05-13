//'use client';

import { Suspense } from "react";
//import { useUser } from "@clerk/clerk-react";
import styles from "./admin.module.css";

import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { redirect } from "next/navigation";

const AdminPage = () => {

  /*const {user, isLoaded} = useUser();
  const isAdmin = user && user.primaryEmailAddress?.emailAddress === "eedoardo.mariucci@gmail.com";
  
  if(isLoaded && !isAdmin) return (redirect('/'));*/

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage