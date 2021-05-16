import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import ProductGroup from "../pages/ProductGroup";
import Error404 from "../pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/boards" exact component={ProductGroup} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
