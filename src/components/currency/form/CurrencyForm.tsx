import React from "react";
import "../../../styles/form.scss";
import styles from "./CurrencyForm.module.scss";

const CurrencyForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className="form-group">
          <span className={styles.code}>cryptocurrency code</span>
          <input type="text" placeholder="BTC" />
        </div>
        <div className="form-group">
          <button className={styles.btn}>Add</button>
        </div>
        <p className={styles.terms}>Use of this service is subject to terms and conditions</p>
      </form>
    </div>
  );
};

export default CurrencyForm;
