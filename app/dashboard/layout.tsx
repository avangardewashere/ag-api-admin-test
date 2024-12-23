import { IDashboardLayout } from "./../types";
import Navbar from "./../ui/dashboard/navbar/navbar";
import styles from "./index.module.css";
import Sidebar from "./../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";

const DashBoardLayout = ({ children }: IDashboardLayout) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashBoardLayout;
