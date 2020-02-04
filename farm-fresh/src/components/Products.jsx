import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/products/productActions';
import { addToCart } from '../redux/cart/cartActions';
import Product from './Product';
import Load from './Loader';
import Navigation from './Navigation';


function Products({ productData, fetchProducts, addToCart, cart }) {
    useEffect(() => {
        fetchProducts()
    }, [])

    const handleChange = (e, product) => {
        e.preventDefault();
        addToCart(product);
    }

    return productData.loading ? (
        <Load />
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <Navigation />
            <h2>Available Products</h2>
            <div>
                {productData &&
                    productData.products &&
                    productData.products.map(product => {
                        return (
                            <>
                                <Product product={product} />
                                <button onClick={(e) => handleChange(e, product)}>Add To Cart</button>
                            </>
                        )  
                    })
                }
                {console.log(cart)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        productData: state.product,
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addToCart: product => dispatch(addToCart(product))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
