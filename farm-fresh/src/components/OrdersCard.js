import React from "react";
import styled from "styled-components";

export default function OrdersCard(props) {
  const oCard = styled.div`
    background: firebrick;
  `;
  const order = props.orders;
  console.log(order);
  return (
    <div>
      {order.map(o => {
        return (
          <oCard>
            <h2>Name: {o.name}</h2>
            <h4>Email: {o.email}</h4>
            <h4>Phone: {o.phone}</h4>
            <p>
              Item: {o.item} / Qty: {o.quantity}
            </p>
            <button>DONE!</button>
          </oCard>
        );
      })}
    </div>
  );
}
