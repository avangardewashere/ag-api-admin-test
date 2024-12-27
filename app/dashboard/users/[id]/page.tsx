import Image from "next/image";
import styles from "./index.module.css";
import defaultImg from "@/assets/images/user.png";
import { fetchSingleUser } from "@/lib/api/data";
const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);
  console.log(user)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={defaultImg} alt="default avatar image" />
        </div>
        {user?.username}
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={user?.id} />
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user?.username}
          />

          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user?.email}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={user?.password}
          />

          <label htmlFor="phone">phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder={user?.phone}
          />

          <label htmlFor="address">address</label>
          <textarea name="address" id="address" placeholder={user?.address} />

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

          <button className={styles.button}>Update Informaiton</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
