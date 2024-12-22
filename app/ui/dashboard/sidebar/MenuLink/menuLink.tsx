import { MenuItem } from "@/app/types";
import styles from "./index.module.css";
import Link from "next/link";

const MenuLink = (props:MenuItem) => {
  return (
    <Link href={props.path} className={styles.container}>
      {props.icon}
      {props.title}
    </Link>
  );
};

export default MenuLink;
