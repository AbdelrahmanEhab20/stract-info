import React from "react";
import styles from "./Home.module.css";
import Starter from "../../components/starter/Starter";
import Main from "../../components/main/Main";
// import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Starter />
      <Main />
    </div>
  );
}
