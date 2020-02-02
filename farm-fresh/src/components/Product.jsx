import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
img {
    width: 25%;
}
`


const Product = props => {
    return (
        <Div>
            <img src={props.product.image_url} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
        </Div>
    );
}

export default Product;