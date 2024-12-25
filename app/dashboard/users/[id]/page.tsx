import Image from "next/image";
import styles from "./index.module.css";
import defaultImg from "@/assets/images/user.png";
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Image src={defaultImg} alt="default avatar image" />
      </div>
      Name Sample
      <div className={styles.formContainer}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />

        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder="email" />

        <label htmlFor="passowrd">passowrd</label>
        <input
          type="password"
          name="passowrd"
          id="passowrd"
          placeholder="passowrd"
        />

        <label htmlFor="phone">phone</label>
        <input type="text" name="phone" id="phone" placeholder="phone" />

        <label htmlFor="address">address</label>
        <textarea name="address" id="address" placeholder="New York" />

        <label htmlFor="isAdmin">is Admin</label>
        <select name="isAdmin" id="isAdmin">
          <option value="true">Yes</option>
          <option value="true">No</option>
        </select>

        <label htmlFor="isActive">is Active</label>
        <select name="isActive" id="isActive">
          <option value="true">Yes</option>
          <option value="true">No</option>
        </select>
        
      </div>
    </div>
  );
};

export default SingleUserPage;
