import { Outlet } from "react-router";
import styles from "@/styles/layout/common.module.sass"

const CommonLayout = () => {
  return (
    <div className={styles['common']}>
      <div className={styles['common--header']}>Header</div>
      <main className={styles['common--content']}>
        <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;