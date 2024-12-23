import { ISearch } from "@/app/types";
import styles from "./index.module.css";


const Search = ({ placeholder }:ISearch) => {
  return (
    <div className={styles.container}>
      <span>{placeholder}</span>
    </div>
  );
};

export default Search;
