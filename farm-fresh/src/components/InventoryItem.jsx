import React from 'react';
// import styled from 'styled-components';

// const Div = styled.div`
// img {
//     width: 25%;
// }
// `


const Inventory = props => {
    return (
        <div>
            {/* <img src={props.product.image_url} alt={props.product.name}/> */}
            <p>ID: {props.inventory.id}</p>
            <p>Farm ID: {props.inventory.farm_id}</p>
            <p>Product ID: {props.inventory.product_id}</p>
            <p>Quantity in stock: {props.inventory.quantity_in_stock}</p>
        </div>
    );
}

export default Inventory;