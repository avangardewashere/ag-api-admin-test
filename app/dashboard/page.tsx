import Card from "../ui/dashboard/card/card";
import Charts from "../ui/dashboard/charts/charts";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transaction";
import styles from "./index.module.css";

const dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainSection}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />
        <Charts />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};
export default dashboard;
