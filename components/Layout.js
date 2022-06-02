import styles from "../styles/Layout.module.css";
 const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      Layout
    </div>
  );
};

export default Layout