import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import { Link, Route } from "react-router-dom";
import NavigationFarmer from "./NavigationFarmer";
import Inventory from "./Inventory";
export default function Farmer() {
  let id = localStorage.getItem("farmId");
  const [farmer, setFarmer] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`https://farm-fresh-produce-api.herokuapp.com/api/farms/${id}`)
      .then(response => {
        console.log(response);
        setFarmer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(id);
  }, []);
  return (
    <div>
      <NavigationFarmer />
      <h1>Farmer's Dashboard</h1>
      <div className="info">
        <p>Farm Name: {farmer.farm_name}</p>
        <p>Phone Number: {farmer.phone_number} </p>
        <p>Email: {farmer.email}</p>
        <p>Address: {farmer.address}</p>
        <p>City: {farmer.city}</p>
        <p>State: {farmer.state}</p>
        <p>Zip Code: {farmer.zipcode}</p>
        <Link to="/edit-info">Edit Info</Link>
        <Route to="/inventory" component={Inventory} />
      </div>
    </div>
  );
}
