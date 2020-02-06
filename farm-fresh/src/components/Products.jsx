import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/products/productActions";
import { addToCart } from "../redux/cart/cartActions";
import Product from "./Product";
import Load from "./Loader";


function Products({ productData, fetchProducts, addToCart, cart }) {
  useEffect(() => {
    fetchProducts();
  }, []);


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
                    productData.products.map(product => {
                        return (
                            <>
                                <Product product={product} />
                                <button onClick={() => addToCart(product)}>Add To Cart</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
