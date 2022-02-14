import { ApolloClient, InMemoryCache } from "@apollo/client";
const apiUri = "https://api.blocktap.io/graphiql";

const client = new ApolloClient({
  uri: apiUri,
  cache: new InMemoryCache(),
});

export default client;
