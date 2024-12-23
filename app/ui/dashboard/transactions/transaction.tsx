import Image from "next/image";
import styles from "./index.module.css";
import defaultImg from "@/assets/images/user.png";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={defaultImg}
                  alt="default-no-avaatar-image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2023</td>
            <td>Php 2,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={defaultImg}
                  alt="default-no-avaatar-image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jenny Click
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2023</td>
            <td>Php 2,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={defaultImg}
                  alt="default-no-avaatar-image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Stephen Hey
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2023</td>
            <td>Php 2,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
