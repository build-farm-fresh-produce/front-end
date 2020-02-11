import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
width: 60%;
text-align: center;
display: block;
margin: auto;
padding 20px;
font-size: 1.5rem;


img {
    
    width: 60%;
    box-shadow: 5px 5px 10px #888888;
}

p{
    display:;
}


`


const Product = props => {
    return (
        <Div>
            <img src={props.product.image_url} alt={props.product.name}/>
            <p>{props.product.product_name}</p>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
            
           
        </Div>
    );
}

export default Product;