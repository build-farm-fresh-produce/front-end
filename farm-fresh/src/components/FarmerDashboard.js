import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import { Link, Route } from "react-router-dom";
import NavigationFarmer from "./NavigationFarmer";
import Inventory from "./Inventory";
import Orders from "./Orders";

import styled from "styled-components";

export default function Farmer() {
  const Page = styled.div`
    width: 900px;
    margin: 0 auto;
  `;

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
      <Page>
        <h1>Farmer's Dashboard</h1>
        <div className="info">
          <p>Farm Name: {farmer.farm_name}</p>
          <p>Phone Number: {farmer.phone_number} </p>
          <p>Email: {farmer.email}</p>
          <p>Address: {farmer.address}</p>
          <p>City: {farmer.city}</p>
          <p>State: {farmer.state}</p>
          <p>Zip Code: {farmer.zipcode}</p>
          <Link to={{ pathname: "/edit-info", state: { farmer } }}>
            Edit Info
          </Link>

          <Route path="/farmer-dashboard/inventory" component={Inventory} />
          <Route path="/farmer-dashboard/orders" component={Orders} />
        </div>
      </Page>
    </div>
  );
}

const Container = styled.div`
  width: 60%;
  margin-top: auto;
  margin: auto;
  padding: 10px;
  box-shadow: 5px 5px 10px #888888;

  .edit {
    height: 50px;
    background-color: #1f7a1f;
    width: 30%;
  }

  .edit a {
    text-decoration: none;
    color: #f2f2f2;
  }
`;
