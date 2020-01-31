import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compone/Navbar";
import ProductList from "./compone/ProductList";
import Details from "./compone/Details";
import Cart from "./compone/Cart";
import Default from "./compone/Default";
import Farmer from "./compone/Farmer";

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" compoment={ProductList} />
          <Route path="/details" compoment={Details} />
          <Route path="/cart" compoment={Cart} />
          <Route compoment={Default} />
        </Switch>
      </React.Fragment>
      <Farmer />
    </div>
  );
}

export default App;
