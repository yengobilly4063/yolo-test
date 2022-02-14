import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import client from "./graphql/apollo.client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
