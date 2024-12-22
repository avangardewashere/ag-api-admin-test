"use client";
import { MenuItem } from "@/app/types";
import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = (props:MenuItem) => {

  const pathname = usePathname();

  return (
    <Link href={props.path} className={`${styles.container} ${pathname === props.path && styles.active }`}>
      {props.icon}
      {props.title}
    </Link>
  );
};

export default MenuLink;
