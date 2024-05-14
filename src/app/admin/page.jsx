import styles from "./admin.module.css";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from '@clerk/nextjs/server';

import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";

const AdminPage = () => {
  const { userId } = auth();

  if (!userId || userId != 'user_2gBnJw6glRGktCSQPsLVMktcoA4') {
    return (redirect('/'));
  }

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