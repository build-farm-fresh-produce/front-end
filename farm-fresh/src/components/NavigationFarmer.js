import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/farmer-dashboard">Dashboard</NavLink>
      <NavLink to="/farmer-dashboard/inventory">Inventory</NavLink>
      <NavLink to="/farmer-dashboard/orders">Orders</NavLink>
      <Link onClick={Logout}>Logout</Link>
    </div>
  );
}

export default Navigation;
