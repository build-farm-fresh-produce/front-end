import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Orders = (props) => {
    let id = localStorage.getItem("farmId");
 
    useEffect(() => {
        

    },[props.orders])
    return (
        <div>
            <h4>Orders</h4>
        {props.orders.orders.map((item,i) => {
            return item.map(obj => {
               console.log(obj.farm_id)
               return( 
                <div>
                    <p>{obj.product_name}</p>
                    <p>{obj.quantity_in_cart}</p>
                </div>
               )
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
