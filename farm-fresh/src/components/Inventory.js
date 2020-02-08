import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import InventoryList from "./InventoryList";

export default function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://farm-fresh-produce-api.herokuapp.com/api/inventory")
      .then(res => {
        // console.log(res.data);
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <InventoryList />
    </div>
  );
}
