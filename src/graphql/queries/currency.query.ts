import gql from "graphql-tag";

export const GET_CURRENCY = gql`
  query price($baseSymbol: String, $quoteSymbol: String) {
    currencies: markets(filter: { baseSymbol: { _eq: $baseSymbol }, quoteSymbol: { _eq: $quoteSymbol } }) {
      id
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
