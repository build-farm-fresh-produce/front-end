import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/farmer-dashboard">Dashboard</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <Link onClick={Logout}>Logout</Link>
    </div>
  );
}

export default Navigation;
