import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavigationFarmer from "./NavigationFarmer";
import { axiosWithAuth } from "../tools/axiosAuth";

export default function EditForm(props) {
  const farmerInfo = props.location.state.farmer;
  const [updateInfo, setUpdateInfo] = useState({ ...farmerInfo });

  const formHandler = event => {
    event.preventDefault();
  };

  const handleNameChange = event => {
    // debugger;
    setUpdateInfo({ ...updateInfo, [event.target.name]: event.target.value });
    console.dir(event.target);
  };

  return (
    <div className="edit-form">
      <NavigationFarmer />
      <h1>Farmer's Dashboard</h1>
      <div className="info-edit">
        <p>Farm Name: {updateInfo.farm_name}</p>
        <p>Phone Number: {farmerInfo.phone_number} </p>
        <p>Email: {farmerInfo.email}</p>
        <p>Address: {farmerInfo.address}</p>
        <p>City: {farmerInfo.city}</p>
        <p>State: {farmerInfo.state}</p>
        <p>Zip Code: {farmerInfo.zipcode}</p>
      </div>

      <form onSubmit={formHandler}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="farm_name"
              value={updateInfo.farm_name}
              onChange={handleNameChange}
              placeholder={updateInfo.farm_name}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={updateInfo.email}
              onChange={handleNameChange}
              placeholder={updateInfo.email}
            />
          </label>
        </div>
        <button>Update your !@$#%@</button>
      </form>
    </div>
  );
}
