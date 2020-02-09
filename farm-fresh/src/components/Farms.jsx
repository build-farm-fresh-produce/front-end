import React, { useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";

const Farms = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("https://farm-fresh-produce-api.herokuapp.com/api/farms/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    axiosWithAuth()
      .get("https://farm-fresh-produce-api.herokuapp.com/api/inventory/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return <div></div>;
};

export default Farms;
