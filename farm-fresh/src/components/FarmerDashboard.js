import React, { useEffect, useState } from "react";
import Faker from "faker";
import { Link, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Registration from "./Registration";
import { axiosWithAuth } from "../tools/axiosAuth";

export default function Farmer(props) {
  let id = localStorage.getItem("farmId");

  const [farmer, setFarmer] = useState([]);

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
  });
  return (
    <div>
      <Navigation />

      <h1>Farmer's Dashboard</h1>
      <div className="info">
        <p>Name: {farmer.userName}</p>
        <p>Phone Number: {Faker.phone.phoneNumber()} </p>
        <p>Email: {Faker.internet.email()}</p>
        <p>Street Address: {Faker.address.streetAddress()}</p>
        <p>City: {Faker.address.city()}</p>
        <p>State: {Faker.address.state()}</p>
        <Link to="/edit-info">Edit Info</Link>
      </div>

      <div className="products-list"></div>
    </div>
  );
}
