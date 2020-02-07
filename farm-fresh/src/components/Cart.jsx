import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/cart/cartActions';
import { completeOrder } from '../redux/orders/orderActions';
import getTotalCost from '../redux/cart/cartSelectors';
import Navigation from './Navigation';
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

function Cart({ cart, totalCost, removeFromCart, increaseQuantity, decreaseQuantity, completeOrder, orders, clearCart }) {

    let addedItems = cart.cart.length ? (
        <div>
            {cart.cart.map(item => {
                return (
                    <Div key={item.id}>
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
            {console.log(cart)}
            <p>Total: ${totalCost.toFixed(2)}</p>           
            <div>
                <button onClick={() => clearCart(cart)}>Clear Cart</button>
                <button onClick={() => {
                completeOrder(cart);
                clearCart(cart);
                }}>Complete Order</button>
            </div>
            {console.log(orders)}
        </div>

    ) : (
        <p>Nothing.</p>
    )

    return (
        <div className='cart'>
            <Navigation />
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
        totalCost: getTotalCost(state.cart),
        orders: state.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product)),
        increaseQuantity: product => dispatch(increaseQuantity(product)),
        decreaseQuantity: product => dispatch(decreaseQuantity(product)),
        completeOrder: cart => dispatch(completeOrder(cart)),
        clearCart: cart => dispatch(clearCart(cart))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);