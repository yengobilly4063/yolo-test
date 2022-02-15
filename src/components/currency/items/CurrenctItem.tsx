import React from "react";
import { Currency } from "../../../store/currency/currency.types";
import styles from "./CurrenctItem.module.scss";
import icon from "../../../assets/icon.svg";

interface IProps {
  currency?: Currency;
}

const CurrenctItem: React.FC<IProps> = ({ currency }) => {
  return (
    <React.Fragment>
      <div className={styles.item}>
        <img className={styles.icon} src={icon} alt="" />
        <div className={styles.info}>
          <span>{currency?.name}</span>
          <span className={styles.amount}>{`${currency?.amount}`} &euro;</span>
        </div>
        <span className={styles.close}>x</span>
      </div>
      <div className={styles.fade_line}></div>
    </React.Fragment>
  );
};

export default CurrenctItem;
