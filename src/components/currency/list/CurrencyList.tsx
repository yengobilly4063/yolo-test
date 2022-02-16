import React from "react";
import { useSelector } from "react-redux";
import { getCurrencyState } from "../../../store/currency/currency.reducer";
import { Currency } from "../../../store/currency/currency.types";
import CurrenctItem from "../items/CurrenctItem";
import styles from "./CurrencyList.module.scss";

const CurrencyList: React.FC = () => {
  const { currencies } = useSelector(getCurrencyState);

  if (currencies.length === 0) {
    return (
      <div className={styles.no_content}>
        <h1>No search results!</h1>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {currencies.map((currency: Currency) => (
        <CurrenctItem currency={currency} key={currency?.id} />
      ))}
    </div>
  );
};

export default CurrencyList;
