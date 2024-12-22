import { MenuItems } from "@/app/types/data";
import styles from "./index.module.css";
import MenuLink from "./MenuLink/menuLink";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {MenuItems?.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list?.map((item) => (
              <MenuLink
                key={item.title}
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
