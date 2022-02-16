export interface IState {
  currencies: Array<Currency>;
  results: Array<string>;
}

export interface CurrencyActionType {
  type: CurrencyActionConstants;
  payload?: Array<CurrencyPayload> | Currency | string | undefined;
}

export enum CurrencyActionConstants {
  GET_CURRENCY = "[Currency] GET_CURRENCY ",
  DELETE_CURRENCY = "[Currency] DELETE_CURRENCY ",
}

export interface CurrencyPayload {
  id?: string;
  marketSymbol?: string;
  ticker?: Ticker;
}

export interface Ticker {
  lastPrice?: string;
}

export interface Currency {
  id?: string;
  name?: string;
  amount?: number;
}
