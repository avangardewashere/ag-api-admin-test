"use client";
import { ISearch } from "@/app/types";
import styles from "./index.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: ISearch) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  console.log(searchParams);
  console.log(pathname);

  const handleOnChange = useDebouncedCallback((variable: string) => {
    console.log(variable);

    params.set("page", (1).toLocaleString());
    if (variable) {
      // variable.length > 2 &&

      params.set("q", variable);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 500);

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
