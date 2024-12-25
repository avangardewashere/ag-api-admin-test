import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login </h1>
        <input type="text" name="" placeholder="username" id="" />
        <input type="password" name="" placeholder="passowrd" id="" />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
