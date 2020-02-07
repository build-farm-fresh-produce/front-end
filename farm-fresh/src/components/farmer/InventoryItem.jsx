import React from 'react';
import styled from 'styled-components';

const Div =  styled.div`
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
width: 30%;
margin: 0 3em;
text-align: center;

img {
    width: 12em;
    height: 12em;
}

button {
    width: 50%;
    margin: 0 auto;
}
`

const InventoryItem = (props) => {
    return (
        <Div>
            <img src={props.image} alt={props.name}/>
            <h5>{props.name}</h5>
            <p>Quantity</p>

            <button>Delete</button>
            <button>Edit</button>
        </Div>
    );
}

export default InventoryItem;
