import React from "react";
import { Currency } from "../../../store/currency/currency.types";
import styles from "./CurrenctItem.module.scss";
import icon from "../../../assets/icon.svg";
import { useDispatch } from "react-redux";
import { deleteCurrency } from "../../../store/currency/currency.action-creators";

interface IProps {
  currency?: Currency;
}

const CurrenctItem: React.FC<IProps> = ({ currency }) => {
  const dispatch = useDispatch();

  const handleDeleteCurrency = () => {
    dispatch(deleteCurrency(currency!));
  };
  return (
    <React.Fragment>
      <div className={styles.item}>
        <img className={styles.icon} src={icon} alt="" />
        <div className={styles.info}>
          <span>{currency?.name}</span>
          <span className={styles.amount}>{`${currency?.amount}`} &euro;</span>
        </div>
        <span className={styles.close} onClick={handleDeleteCurrency}>
          x
        </span>
      </div>
      <div className={styles.fade_line}></div>
    </React.Fragment>
  );
};

export default CurrenctItem;
