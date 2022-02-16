import { ApolloClient, InMemoryCache } from "@apollo/client";
const apiUri = "https://api.blocktap.io/graphql";

const client = new ApolloClient({
  uri: apiUri,
  cache: new InMemoryCache(),
});

export default client;
