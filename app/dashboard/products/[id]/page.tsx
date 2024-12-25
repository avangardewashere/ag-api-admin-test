import Image from "next/image";
import styles from "./index.module.css";
import defaultImg from "@/assets/images/user.png";
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={defaultImg} alt="default avatar image" />
        </div>
        Iphone
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>

          <label htmlFor="username">title</label>
          <input type="text" name="title" id="title" placeholder="title" />

          <label htmlFor="price">price</label>
          <input type="number" name="price" id="price" placeholder="price" />

          <label htmlFor="stock">stock</label>
          <input type="number" name="stock" id="stock" placeholder="stock" />

          <label htmlFor="color">color</label>
          <input type="text" name="color" id="color" placeholder="color" />

          <label htmlFor="size">size</label>
          <input type="text" name="size" id="size" placeholder="size" />


          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="general">Choose a category</option>
            <option value="Hhme">Home</option>
            <option value="technology">Technology</option>
            <option value="beauty">Beauty</option>
          </select>

          <label htmlFor="description">description</label>
          <textarea
            name="description"
            id="description"
            placeholder="lorem ipsum item description imus"
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
