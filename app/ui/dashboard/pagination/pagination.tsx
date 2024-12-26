'use client'
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import styles from "./index.module.css";
 

const Pagination = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1);
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE * 6;

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={`${styles.previous} ${styles.button}`}
      >
        Previous
      </button>
      <button disabled={!hasNext} className={`${styles.next} ${styles.button}`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
