import React from "react";
import { Currency } from "../../../store/currency/currency.types";
import CurrenctItem from "../items/CurrenctItem";
import styles from "./CurrencyList.module.scss";

const currencies: Array<Currency> = [
  { id: 1, name: "BTC", amount: 7842.27 },
  { id: 2, name: "LTC", amount: 53.53 },
  { id: 3, name: "XMR", amount: 56.42 },
];

const CurrencyList: React.FC = () => {
  return (
    <div className={styles.list}>
      {currencies.map((currency) => (
        <CurrenctItem currency={currency} key={currency.id} />
      ))}
    </div>
  );
};

export default CurrencyList;
