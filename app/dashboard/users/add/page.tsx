import styles from "./index.module.css";

const AddProductsPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          id=""
        />
        <input type="email" name="email" placeholder="email" required id="" />
        <input
          type="passwordt"
          name="password"
          placeholder="password"
          required
          id=""
        />
        <input type="phone" name="phone" placeholder="phone" required id="" />

        <select name="isAdmin" id="isAdmin">
          <option value="false">is Admin?</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="false">is Active?</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>

        <textarea
          name="adress"
          placeholder="adress"
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
