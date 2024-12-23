import { ISearch } from "@/app/types";
import styles from "./index.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }: ISearch) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} name="" id="" />
    </div>
  );
};

export default Search;
