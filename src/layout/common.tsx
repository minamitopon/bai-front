import { Outlet } from "react-router";
import Header from "@/components/global/Header/Header";
import Footer from "@/components/global/Footer/Footer";
import styles from "@/styles/layout/common.module.sass"

const CommonLayout = () => {
  return (
    <div className={styles['common']}>
      <Header />
      <main className={styles['common--content']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;