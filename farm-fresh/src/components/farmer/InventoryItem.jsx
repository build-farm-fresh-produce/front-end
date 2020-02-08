import React, {useState} from 'react';
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

    const [editing, setEditing] = useState(false);

    const [itemToEdit, setItemToEdit] = useState()

    const deleteProduct = item => {
        props.deleteItem(item.id)
    }

    const handleChange = e => {
        setItemToEdit({
          ...itemToEdit,
          [e.target.name]: e.target.value
        });
       
      };

    const editProduct = color => {
        setEditing(true);
        setItemToEdit(props.item);
        console.log(itemToEdit);
        
    }

    const saveEdit = (e) => {
        props.updateItem(itemToEdit.id, itemToEdit);
        setEditing(true);
    }
    return (
        <Div>
            <img src={props.image} alt={props.name}/>
            <h5>{props.name}</h5>
            <p>Quantity</p>
          

            <button onClick={e => {
                deleteProduct(props.item)
            }}>Delete</button>
            <button onClick = {() => {
                editProduct(props.item)
            }}>Edit</button>

            {itemToEdit ? <form onSubmit={() => {
                saveEdit()
            }}>
                <input type="text"
                name = 'product_name'
                value={itemToEdit.product_name}
                onChange={handleChange}

                />

                <input type="text"
                name = 'description'
                value={itemToEdit.description}
                onChange={handleChange}
                
                />

                <input type="text"
                name = 'image_url'
                value={itemToEdit.image_url}
                onChange={handleChange}
                
                />

                <input type="number"
                name = 'price'
                value={itemToEdit.price}
                onChange={handleChange}
                
                />

                <input type="text"
                name = 'unit'
                value={itemToEdit.unit}
                onChange={handleChange}
                
                />

                <button>Save</button>
            </form> : ''}

            
        </Div>
    );
}

export default InventoryItem;
