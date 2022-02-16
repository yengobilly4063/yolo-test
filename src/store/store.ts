import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getCurrenciesFromLocalStorage, getSearchResultsToLocalStorage } from "../helpers/currency.local.helpers";
import currencyReducer from "./currency/currency.reducer";
import { IState } from "./currency/currency.types";

const initialCurrencyState: IState = {
  currencies: getCurrenciesFromLocalStorage(),
  results: getSearchResultsToLocalStorage(),
};

export const store = createStore(currencyReducer, initialCurrencyState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
