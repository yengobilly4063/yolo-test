import React from "react";
import CurrencyForm from "../../components/currency/form/CurrencyForm";
import CurrencyList from "../../components/currency/list/CurrencyList";
import MainLayout from "../../components/layouts/main-layout/MainLayout";
import styles from "./Home.module.scss";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.infoForm}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h2>Now you can track </h2>
              <h2>all your cryptos here!</h2>
            </div>
            <p>Just enter the </p>
            <p>cryptocurrency code on the </p>
            <p>
              form to the <span className={styles.rightbottom}></span>
            </p>
          </div>
          <div className={styles.form}>
            <CurrencyForm />
          </div>
        </div>
        <div className={styles.result}>
          <CurrencyList />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
