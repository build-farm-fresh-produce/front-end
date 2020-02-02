import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import Navigation from './Navigation';

function Cart() {
    return (
        <div className='cart'>
            {
                cart.length ? cart.map(item => {
                    return(
                        <CartProduct />
                    )
                }) :    <Load />  
            }
        </div>
    );
}