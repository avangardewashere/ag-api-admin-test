import { IDashboardLayout } from "../types";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const DashBoardLayout = ({ children }: IDashboardLayout) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <div>dashboard</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
