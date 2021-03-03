import React, { ReactNode } from "react";

import Nav from "./Nav";
// import Meta from './Meta'
// import Header from './Header'
import styles from "../styles/Layout.module.css";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Meta /> */}
      <Nav />
      <main className={styles.main}>
        {/* <Header /> */}
        {children}
      </main>
    </>
  );
};

export default Layout;
