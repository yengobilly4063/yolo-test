import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" from="*" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
