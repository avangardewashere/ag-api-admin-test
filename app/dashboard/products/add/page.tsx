import { addProduct } from "@/lib/actions";
import styles from "./index.module.css";

const AddProductsPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="title" required id="" />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="Hhme">Home</option>
          <option value="technology">Technology</option>
          <option value="beauty">Beauty</option>
        </select>
        <input type="number" name="price" placeholder="price" id="" />
        <input type="number" name="stock" placeholder="stock" id="" />
        <input type="text" name="color" placeholder="color" id="" />
        <input type="text" name="size" placeholder="size" id="" />
        <textarea
          name="description"
          placeholder="Item description"
          id="desc"
          cols={30}
          rows={16}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductsPage;
