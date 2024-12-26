"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./index.module.css";

interface IPagination {
  count: number;
}

const Pagination = ({ count }: IPagination) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1);
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: "prev" | "next") => {
  
    type === "prev"
      ? params.set("page", (Number(page) - 1).toString())
      : params.set("page", (Number(page) + 1).toString());

      replace(`${pathname}?${params}`)
  };

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={`${styles.previous} ${styles.button}`}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`${styles.next} ${styles.button}`}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
