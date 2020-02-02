import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/cartActions';

const Div = styled.div`
img {
    width: 25%;
}
`


const Product = (props) => {
    return (
        <Div>
            <img src={props.product.image_url} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
            <button onClick={() => props.addToCart(props.product.product_id)}>Add To Cart</button>
            
        </Div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: () => dispatch(addToCart())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Product);

// export default Product;
