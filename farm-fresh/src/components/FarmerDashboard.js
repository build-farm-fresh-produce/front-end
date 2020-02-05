import React,{ useState, useEffect } from "react";
import Faker from "faker";
import { axiosWithAuth } from '../tools/axiosAuth';
import { Link, Route } from "react-router-dom";

export default function Farmer() {
 let id =localStorage.getItem('farmId');

 const [farmer, setFarmer] =  useState({})

  useEffect(() => {
    axiosWithAuth().get(`https://farm-fresh-produce-api.herokuapp.com/api/farms/${id}`)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log(error)
            })
     
     console.log(id);
  },[])
  


  return (
    <div>
      <h1>Farmer's Dashboard</h1>
      <div className="info">
        <p>Name: {id}</p>
        <p>Phone Number: {Faker.phone.phoneNumber()} </p>
        <p>Email: {Faker.internet.email()}</p>
        <p>Address: {Faker.address.streetAddress()}</p>
        <Link to="/edit-info">Edit Info</Link>
      </div>
    </div>
  );
}
