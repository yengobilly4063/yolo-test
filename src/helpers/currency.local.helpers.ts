import { Currency } from "../store/currency/currency.types";

const CURRENCIES = "currencies";
const SEARCH_RESULT = "searchResults";

export const getCurrenciesFromLocalStorage = (): Array<Currency> => {
  return JSON.parse(localStorage.getItem(CURRENCIES) as string) || [];
};

export const addCurrencyToLocalStorage = (currency: Currency) => {
  let currencies: Array<Currency> = getCurrenciesFromLocalStorage();
  currencies.push(currency);
  localStorage.setItem(CURRENCIES, JSON.stringify(currencies));
  return currencies;
};

export const deleteCurrencyLocalStorage = (currency: Currency): Array<Currency> => {
  let currencies: Array<Currency> = getCurrenciesFromLocalStorage();

  currencies = currencies.filter((item: Currency) => item.id !== currency.id);

  localStorage.setItem(CURRENCIES, JSON.stringify(currencies));

  return currencies;
};

export const getSearchResultsToLocalStorage = (): Array<string> => {
  return JSON.parse(localStorage.getItem(SEARCH_RESULT) as string) || [];
};

export const addSearchResultToLocalStorage = (currency: Currency) => {
  let searchResults: Array<string> = getSearchResultsToLocalStorage();

  searchResults.push(currency.name!);

  localStorage.setItem(SEARCH_RESULT, JSON.stringify(searchResults));
  return searchResults;
};

export const deleteSearchResultFromLocalStorage = (currency: Currency): Array<string> => {
  let searchResults: Array<string> = getSearchResultsToLocalStorage();
  searchResults = searchResults.filter((result: string) => result !== currency.name);
  localStorage.setItem(SEARCH_RESULT, JSON.stringify(searchResults));
  return searchResults;
};
