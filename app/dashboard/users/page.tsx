import Search from "@/app/ui/dashboard/search/search";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/lib/api/data";
import { ISearchParams } from "@/app/types";
import defaultImg from "@/assets/images/user.png";



const UsersPage = async ({searchParams}:{searchParams:ISearchParams}) => {

  const q = searchParams?.q || "";
  const page = await searchParams?.page || 1;
  const users = await fetchUsers(q,page.toString())


 
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user"} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <tr key={item?._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={item?.img}
                    alt="no-avatar"
                    width={40}
                    height={40}
                  />
                  {item?.username ?? "No username"}
                </div>
              </td>
              <td>{item?.email}</td>
              <td>13.1.2022</td>
              {/* <td>{item?.createdAt?.toString().slice(4,16)}</td> */}
              <td>{item?.isAdmin ?"Admin" :"User"}</td>
              <td>{item?.isActive ?"Active" :"Inactive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/`+ item._id}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
