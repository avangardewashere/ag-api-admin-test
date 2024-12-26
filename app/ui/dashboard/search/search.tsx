"use client";
import { ISearch } from "@/app/types";
import styles from "./index.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ placeholder }: ISearch) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  console.log(searchParams);
  console.log(pathname);

  const handleOnChange = (variable: string) => {
    console.log(variable);

    if (variable) {
      params.set("q", variable);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(e.target.value)
        }
      />
    </div>
  );
};

export default Search;
