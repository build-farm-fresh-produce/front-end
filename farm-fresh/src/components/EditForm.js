import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavigationFarmer from "./NavigationFarmer";
import { axiosWithAuth } from "../tools/axiosAuth";

export default function EditForm(props) {
  const farmerInfo = props.location.state.farmer;
  console.log("about", props.location);
  console.log("about", farmerInfo.farm_name);
  return (
    <div className="edit-form">
      <NavigationFarmer />
      <h1>Farmer's Dashboard</h1>
      <div className="info-edit">
        <p>Farm Name: {farmerInfo.farm_name}</p>
        <p>Phone Number: {farmerInfo.phone_number} </p>
        <p>Email: {farmerInfo.email}</p>
        <p>Address: {farmerInfo.address}</p>
        <p>City: {farmerInfo.city}</p>
        <p>State: {farmerInfo.state}</p>
        <p>Zip Code: {farmerInfo.zipcode}</p>
      </div>
    </div>
  );
}
