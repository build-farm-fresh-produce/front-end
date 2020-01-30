import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { axiosWithAuth } from '../tools/axiosAuth';

const Products = () => {

    useEffect(()=> {
        axiosWithAuth().get('https://farm-fresh-produce-api.herokuapp.com/api/products/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    })
    return (
        <div className='product-container'>
            <Navigation />
        </div>
    );
}

export default Products;