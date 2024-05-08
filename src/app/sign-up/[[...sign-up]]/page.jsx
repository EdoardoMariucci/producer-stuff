import { SignUp } from "@clerk/nextjs";
import styles from './signUp.module.css'

export default function Page() {
  return (
    <div className={styles.clerk}>
        <SignUp path="/sign-up" />
    </div>
    );
}