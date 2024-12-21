import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
export const MenuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/users",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/users",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdWork />,
      },
      {
        title: "Help",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
  
    ],
  },

];
