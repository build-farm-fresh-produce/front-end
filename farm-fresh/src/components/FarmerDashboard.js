import React from "react";
import Faker from "faker";
import { Link, Route } from "react-router-dom";

export default function Farmer() {
  return (
    <div>
      <h1>Farmer's Dashboard</h1>
      <div className="info">
        <p>Name: {Faker.company.companyName()}</p>
        <p>Phone Number: {Faker.phone.phoneNumber()} </p>
        <p>Email: {Faker.internet.email()}</p>
        <p>Address: {Faker.address.streetAddress()}</p>
        <Link to="/edit-info">Edit Info</Link>
      </div>
    </div>
  );
}
