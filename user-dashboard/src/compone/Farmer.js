import React from "react";
import Products from "./Products";

function Farmer() {
  // username, email, phone number, address
  // inventory

  return (
    <div className="farmer-board">
      <h1>Farmer's Dashboard</h1>
      <div className="info">
        <p>Name: </p>
        <p>Phone Number: </p>
        <p>Email: </p>
        <p>Address: </p>
      </div>
      <Products />
    </div>
  );
}

export default Farmer;
