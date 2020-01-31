import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../tools/axiosAuth';
import Product from './Product';
import Load from './Loader';


const Products = () => {

    const [products, updateProducts] = useState([]);
    
    useEffect(()=> {
        axiosWithAuth().get('https://farm-fresh-produce-api.herokuapp.com/api/products/')
        .then(res => {
            console.log(res)
            updateProducts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return (
        <div>
            {
                products.length ? products.map(item => {
                    return(
                        <Product
                        name={item.product_name}
                        image={item.image_url}
                        description={item.description}
                         />
                    )
                }) :    <Load/>
                
            
            }
            
        </div>
    );
}

export default Products;
