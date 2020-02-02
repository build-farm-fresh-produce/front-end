import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
img {
    width: 25%;
}
`


const Product = (props) => {
    return (
        <Div>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button>Add To Cart</button>
            
        </Div>
    );
}

export default Product;
