import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Index";
import Product from "./components/products/Index";


const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:products">
          <Product />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
