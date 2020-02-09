import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import faker from "faker";
import OrdersCard from "./OrdersCard";

export default function Orders() {
  const orders = [
    {
      name: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      item: faker.commerce.productName(),
      quantity: faker.random.number()
    },
    {
      name: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      item: faker.commerce.productName(),
      quantity: faker.random.number()
    }
  ];
  return (
    <div>
      <h2>ORDERS</h2>
      <OrdersCard orders={orders} />
    </div>
  );
}
