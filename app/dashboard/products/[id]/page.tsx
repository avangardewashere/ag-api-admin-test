import Image from "next/image";
import styles from "./index.module.css";
import defaultImg from "@/assets/images/user.png";
import { ISearchParamsID } from "@/app/types";
import { fetchSingleProduct } from "@/lib/api/data";
import { updateProducts } from "@/lib/actions";
const SingleProductPage = async ({ params }: ISearchParamsID) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={defaultImg} alt="default avatar image" />
        </div>
        {product?.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProducts} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="username">title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={product?.title}
          />

          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder={product?.price}
          />

          <label htmlFor="stock">stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder={product?.price}
          />

          <label htmlFor="color">color</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder={product?.color}
          />

          <label htmlFor="size">size</label>
          <input
            type="text"
            name="size"
            id="size"
            placeholder={product?.size}
          />

          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option selected={product?.category === "general"} value="general">
              Choose a category
            </option>
            <option selected={product?.category === "home"} value="home">
              Home
            </option>
            <option
              selected={product?.category === "technology"}
              value="technology"
            >
              Technology
            </option>
            <option selected={product?.category === "beauty"} value="beauty">
              Beauty
            </option>
          </select>

          <label htmlFor="description">description</label>
          <textarea
            name="description"
            id="description"
            placeholder={product?.description}
          />

          {/*       
          <label htmlFor="isActive">is Active</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="true">No</option>
          </select> */}

          <button className={styles.button}>Update Product Informaiton</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
