import { SignIn } from "@clerk/nextjs";
import styles from './signIn.module.css'

export default function Page() {
  return (
    <div className={styles.clerk}>
    <SignIn path="/sign-in" />
    </div>
);
}