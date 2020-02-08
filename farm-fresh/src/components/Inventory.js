import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";

export default function Inventory() {
  const [items, setItems] = useState();

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
      <h2>INVENTORY</h2>
      {console.log(items)}
    </div>
  );
}
