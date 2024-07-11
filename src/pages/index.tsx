// components
import { HomeLayout } from "@/components";

// styles
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HomeLayout />
    </div>
  );
}