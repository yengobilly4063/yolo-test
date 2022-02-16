import {
  deleteCurrencyLocalStorage,
  deleteSearchResultFromLocalStorage,
  addCurrencyToLocalStorage,
  addSearchResultToLocalStorage,
} from "../../helpers/currency.local.helpers";
import { Currency, CurrencyActionConstants, CurrencyActionType, IState } from "./currency.types";

const initialState: IState = {
  currencies: [],
  results: [],
};

const currencyReducer = (state: IState = initialState, action: CurrencyActionType) => {
  switch (action.type) {
    case CurrencyActionConstants.GET_CURRENCY: {
      const currency = action.payload as Currency;
      return {
        ...state,
        results: addSearchResultToLocalStorage(currency),
        currencies: addCurrencyToLocalStorage(currency),
      };
    }
    case CurrencyActionConstants.DELETE_CURRENCY: {
      const currency = action.payload as Currency;
      return {
        ...state,
        results: deleteSearchResultFromLocalStorage(currency),
        currencies: deleteCurrencyLocalStorage(currency),
      };
    }
    default: {
      return state;
    }
  }
};

export const getCurrencyState = (state: IState) => state;

export default currencyReducer;
