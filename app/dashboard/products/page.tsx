import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "./index.module.css";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import defaultImg from "@/assets/images/user.png";
import { ISearchParams } from "@/app/types";
import { fetchProducts } from "@/lib/api/data";
import { deleteProduct } from "@/lib/actions";
const Transactions = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a product"} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={product.img ?? defaultImg}
                    alt="no-avatar"
                    width={40}
                    height={40}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product?.descriptioin}</td>
              <td>{product?.price}</td>
              <td>13.1.2022</td>
              {/* <td>{product.createdAt.toString().slice(4, 16)}</td> */}

              <td>{product?.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/` + product.id}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Transactions;
