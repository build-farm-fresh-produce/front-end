import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cart/cartActions';
import getTotalCost from '../redux/cart/cartSelectors';
import styled from 'styled-components';

const Div = styled.div`
img {
    width: 25%;
};

display: flex;
flex-direction: row;
align-items: center;

button {
    height: 30px;
    width: 60px;
    margin: 2%;
}
`

function Cart({ cart, totalCost, removeFromCart, increaseQuantity, decreaseQuantity }) {

    let addedItems = cart.cart.length ? (
        <div>
            {cart.cart.map(item => {
                return (
                    <Div>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                        <img src={item.image_url} alt={item.name}/>
                        <button onClick={() => decreaseQuantity(item)}>-</button>
                        <div>
                            <p>{item.product_name}</p>
                            {/* <p>{item.description}</p> */}
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity_in_cart}</p>
                        </div>
                        <button onClick={() => increaseQuantity(item)}>+</button>
                    </Div>
                )
            })}
            <p>Total: ${totalCost.toFixed(2)}</p>
        </div>

    ) : (
        <p>Nothing.</p>
    )

    return (
        <div className='cart'>
            <h2>You have added:</h2>
            <ul>
                {addedItems}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        totalCost: getTotalCost(state.cart)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product)),
        increaseQuantity: product => dispatch(increaseQuantity(product)),
        decreaseQuantity: product => dispatch(decreaseQuantity(product))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);