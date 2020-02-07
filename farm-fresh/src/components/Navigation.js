import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


function Navigation() {
  return (
    <div id="TopNav" className="navigation">
      <NavLink className="nav-link" to="/farmer-dashboard">Dashboard</NavLink>
      <NavLink className="nav-link" to="/products">Products</NavLink>
      <NavLink className="nav-link" to="/farms">Farms</NavLink>
      <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
      <NavLink className="nav-link" to="/cart">Cart</NavLink>
     
    </div>
  );
}



export default Navigation;

