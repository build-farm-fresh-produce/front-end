import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/cart/cartActions';

function Cart({ cart, removeFromCart }) {
    // console.log(cart);
    // console.log(cart.cart.length);
    let addedItems = cart.cart.length ? (
        cart.cart.map(item => {
            return (
                <div>
                    {/* <img src={item.image_url} alt={item.name}/> */}
                    <p>{item.product_name}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            )
        })
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
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);