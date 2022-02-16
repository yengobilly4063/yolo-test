import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CURRENCY } from "../../../graphql/queries/currency.query";
import { getCurrency } from "../../../store/currency/currency.action-creators";
import { getCurrencyState } from "../../../store/currency/currency.reducer";
import "../../../styles/form.scss";
import Loading from "../../loading/Loading";
import styles from "./CurrencyForm.module.scss";

const CurrencyForm: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const dispatch = useDispatch();
  const { results } = useSelector(getCurrencyState);

  const [getCurrenciesFromGQL, { loading, data: fetchedCurrencies }] = useLazyQuery(GET_CURRENCY, {
    fetchPolicy: "network-only",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setErrorMessage("");
    setInput((prevValue) => value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) {
      setErrorMessage("Currency input is required");
      return;
    }
    if (results.includes(input)) {
      setErrorMessage("currency already fetched");
    }
    getCurrenciesFromGQL({ variables: { baseSymbol: input, quoteSymbol: "EUR" } });
  };

  useEffect(() => {
    if (fetchedCurrencies) {
      const { currencies } = fetchedCurrencies;
      if (currencies.length === 0) {
        setErrorMessage("invalid currency input");
      }
      if (currencies.length !== 0 && !results.includes(input)) {
        dispatch(getCurrency(currencies, input));
      }
    }
  }, [fetchedCurrencies]);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span className={styles.code}>cryptocurrency code</span>
            <input type="text" placeholder="currency" value={input} onChange={handleInputChange} />
          </div>
          <div className="form-group">{errorMessage && <span className={styles.error}>{errorMessage}</span>}</div>
          <div className="form-group">
            <button type="submit" className={styles.btn} disabled={loading}>
              Add
            </button>
          </div>
          <p className={styles.terms}>Use of this service is subject to terms and conditions</p>
        </form>
      )}
    </div>
  );
};

export default CurrencyForm;
