import { MenuItems } from "@/app/types/data";
import styles from "./index.module.css";
import MenuLink from "./MenuLink/menuLink";
import Image from "next/image";
import defaultAvatarImg from "@/assets/images/user.png"
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={defaultAvatarImg} alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Joe</span>
          <span className={styles.userTitle}>Admnistrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {MenuItems?.map((cat) => (
          <li  key={cat.title}>
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
