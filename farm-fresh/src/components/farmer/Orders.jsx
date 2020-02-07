import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div =  styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
div {
display: flex;
justify-content: space-evenly;
align-items: center;
}

.order {
    display: flex;
    flex-direction: column;
    width: 12em;
    margin: 0 1em;
    border: 1px solid black;
    padding: 2%;
}

`

const Orders = (props) => {
    let id = localStorage.getItem("farmId");
    const [farmerOrders, setFarmerOrders] = useState([]);
    useEffect(() => {
        

    },[])
    return (
        <Div>
            <h4>Incoming Orders</h4>
            <div>
                {props.orders.orders.map((item) => {
            return item.map(obj =>{
                return( obj.farm_id == id ? <div className='order'>
                    <p className='product_name'>{obj.product_name}</p>
                    <p className='quantity_in_cart'>Amount: {obj.quantity_in_cart}</p>
                        </div> : '')
                
            })
            
                })
            }
            </div>
        
       
            
        </Div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Orders);
