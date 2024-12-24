import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "./index.module.css";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import defaultImg from "@/assets/images/user.png";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a product"} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src={defaultImg}
                  alt="no-avatar"
                  width={40}
                  height={40}
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>PHP 80,000</td>
            <td>13.1.2022</td>

            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Transactions;
