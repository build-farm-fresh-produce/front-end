import React from "react";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Farms from './components/Farms';
import InventoryList from "./components/InventoryList";
import FarmerDasboard from "./components/FarmerDashboard";
import EditForm from "./components/EditForm";
import Navigation from './components/Navigation';
import { Route, Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const PrivateRoute = ({ component: Products, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Products {...props} />
        ) : (
          <Redirect to="/login-user" />
        )
      }
    />
  );

  return (
    <Router>
      <Navigation />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login-user" component={Login} />
        <Route path="/register-user" component={Registration} />
        <PrivateRoute path="/farmer-dashboard" component={FarmerDasboard} />
        <PrivateRoute path="/edit-info" component={EditForm} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/farms" component={Farms} />
        <PrivateRoute path="/cart" component={Cart} />
        <PrivateRoute path="/inventory" component={InventoryList} />
      </div>
    </Router>
  );
}

export default App;
