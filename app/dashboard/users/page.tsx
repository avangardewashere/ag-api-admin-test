import Search from "@/app/ui/dashboard/search/search";
import styles from "./index.module.css";

const UsersPage = ( ) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search Something..."} />
      </div>
      <div className={styles.table}></div>
    </div>
  );
};

export default UsersPage;
