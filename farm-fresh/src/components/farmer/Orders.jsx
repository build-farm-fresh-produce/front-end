import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Orders = (props) => {
    let id = localStorage.getItem("farmId");
    const [farmerOrders, setFarmerOrders] = useState([]);
    useEffect(() => {
        

    },[props.orders])
    return (
        <div>
            <h4>Orders</h4>
        {props.orders.orders.map((item,i) => {
            return item.map(obj => {
               console.log(obj.farm_id)
               console.log(id)
               if(obj.farm_id === id) {
                //    setFarmerOrders([...farmerOrders, obj]);
                //    console.log(farmerOrders)
                alert(obj)
               }
            })
           
        })}
       
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Orders);
