
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";
import FarmerInventory from './farmer/FarmerInventory';
// import NavigationFarmer from "./NavigationFarmer";

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
    
  }, []);
  return (
  <Container className="dashboard">
      {/* <NavigationFarmer /> */}
      <h1>Farmer's Dashboard</h1>
      <div className="info">

        <p>Farm Name: {farmer.farm_name}</p>
        <p>Phone Number: {farmer.phone_number} </p>
        <p>Email: {farmer.email}</p>
        <p>Address: {farmer.address}</p>
        <p>City: {farmer.city}</p>
        <p>State: {farmer.state}</p>
        <p>Zip Code: {farmer.zipcode}</p>

        <button className = "edit"><Link to="/edit-info">Edit Info</Link></button>
        <FarmerInventory />
      </div>
    </Container>
  );
}

const Container = styled.div`

  width: 60%;
  margin-top: auto;
  margin:auto;
  padding: 10px;
  box-shadow: 5px 5px 10px #888888;

  .edit{
  height: 50px;
  background-color:  #1f7a1f;
  width: 30%;
  }

  .edit a {
    text-decoration:none;
    color: #f2f2f2;
  }

`
