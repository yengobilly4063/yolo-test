import { Dispatch } from "react";
import { getFirstViableCurrency } from "../../helpers/currency.helpers";
import { Currency, CurrencyActionConstants, CurrencyActionType, CurrencyPayload } from "./currency.types";

export const deleteCurrency = (currency: Currency) => async (dispatch: Dispatch<CurrencyActionType>) => {
  dispatch({ type: CurrencyActionConstants.DELETE_CURRENCY, payload: currency });
};

export const getCurrency =
  (data: Array<CurrencyPayload>, input: string) => async (dispatch: Dispatch<CurrencyActionType>) => {
    const currency: Currency = getFirstViableCurrency(data, input);
    dispatch({ type: CurrencyActionConstants.GET_CURRENCY, payload: currency });
  };
