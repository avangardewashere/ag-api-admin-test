import styles from "./index.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.previous}${styles.button}`}>Previous</button>
      <button className={`${styles.next}${styles.button}`}>Next</button>
    </div>
  );
};

export default Pagination;
