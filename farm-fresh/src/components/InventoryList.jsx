import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchInventory } from "../redux/inventory/inventoryActions";
// import { addToCart } from "../redux/cart/cartActions";
import Inventory from "./InventoryItem";
import Load from "./Loader";
import Navigation from "./Navigation";
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

function InventoryList({ productData, inventoryData, fetchInventory }) {
  useEffect(() => {
    fetchInventory();
  }, []);


    return inventoryData.loading ? (
        <Load />
    ) : inventoryData.error ? (
        <h2>{inventoryData.error}</h2>
    ) : (
        <div>
<<<<<<< HEAD
            
=======
           
>>>>>>> a4a589ebbbcb06f5c7a47efdafea071392af3b75
            <h2>Inventory Status</h2>
            <Div>
                {inventoryData &&
                    inventoryData.inventory &&
                    inventoryData.inventory.map(inventory => {
                        return (
                            <>
                                <Inventory inventory={inventory} />
                                {/* <button onClick={() => addToCart(product)}>Add To Cart</button> */}
                            </>
                        )  
                    })
                }
                {console.log('is inventorydata empty? ', inventoryData)}
                {console.log('is productdata empty? ', productData)}
            </Div>
        </div>
    );
};


const mapStateToProps = state => {
  return {
    inventoryData: state.inventory,
    productData: state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInventory: () => dispatch(fetchInventory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);