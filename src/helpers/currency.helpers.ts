import { v4 as uuidv4 } from "uuid";
import { Currency, CurrencyPayload } from "../store/currency/currency.types";

export const getFirstViableCurrency = (input: Array<CurrencyPayload>, symbol: string): Currency => {
  let currency: Currency = {};
  input.some((item) => {
    if (item.ticker && item.ticker.lastPrice) {
      const {
        id,
        ticker: { lastPrice },
      } = item;

      currency = {
        id: id,
        amount: Number(lastPrice),
        name: symbol,
      };
      return true;
    }
  });
  return currency;
};
