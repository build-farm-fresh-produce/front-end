import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Logout from "./Logout";

function Navigation() {
  return (
    <div id="TopNav" className="navigation">
      <NavLink className="nav-link" to="/farmer-dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Products
      </NavLink>
      {/* <NavLink className="nav-link" to="/farms">Farms</NavLink>  */}
      <NavLink className="nav-link" to="/inventory">
        Inventory
      </NavLink>
      <NavLink className="nav-link" to="/cart">
        Cart
      </NavLink>
      <Link onClick={Logout}>Logout</Link>
    </div>
  );
}

export default Navigation;
