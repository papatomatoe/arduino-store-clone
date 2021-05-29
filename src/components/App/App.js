import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import Boards from "../pages/Boards";
import Shields from "../pages/Shields";
import Kits from "../pages/Kits";
import Accessories from "../pages/Accessories";
import ProductPage from "../pages/ProductPage";
import Error404 from "../pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/boards" exact component={Boards} />
        <Route path="/shields" exact component={Shields} />
        <Route path="/kits" exact component={Kits} />
        <Route path="/accessories" exact component={Accessories} />
        <Route path="/boards/:name" exact component={ProductPage} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
