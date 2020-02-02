import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/products/productActions';
import Product from './Product';
import Load from './Loader';


function Products({ productData, fetchProducts, addToCart }) {
    useEffect(() => {
        fetchProducts()
    }, [])

    return productData.loading ? (
        <Load />
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <h2>Available Products</h2>
            <div>
                {productData &&
                    productData.products &&
                    productData.products.map(product =>
                        <Product product={product} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        productData: state.product
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
