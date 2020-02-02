import React from 'react';

const CartProduct = props => {
    return (
        <div className='cart-item'>
            <img src={props.image_url} alt={`${props.product_name}`} />
            <div>
                <h2>{props.product_name}</h2>
                <p>${props.price}</p>
                <button>Remove</button>
            </div>
        </div>
    );
};

export default CartProduct;