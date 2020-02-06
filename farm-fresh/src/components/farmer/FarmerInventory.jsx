import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../tools/axiosAuth';
import styled from 'styled-components';

const Div = styled.div`
border: 1px solid black;

`

const FarmerInventory = () => {
    let id = localStorage.getItem("farmId");

    const [currentInventory, setCurrentInventory] = useState([{}]);

    const [newItem, setNewItem] = useState({
        farm_id: id,
        product_name: '',
        description: '',
        image_url: '',
        price: 0,
        unit: '',

    })

    const [newItemQuantity, setNewItemQuantity] = useState({
        farm_id: id,
        product_id: Date.now(),
        quantity_in_stock: 0,

    })
    // POST request: https://farm-fresh-produce-api.herokuapp.com/api/inventory - Adds an inventory entry - expects JSON Body {"farm_id", "product_id", "quantity_in_stock"}
    // POST request: https://farm-fresh-produce-api.herokuapp.com/api/products - Add a product - expects JSON Body {"farm_id", "product_name", "description", "image_url", "price", "unit"} (edited) 

    useEffect(() => {
        axiosWithAuth()
        .get(`https://farm-fresh-produce-api.herokuapp.com/api/products`)
        .then(response => {
          console.log(response.data);
          console.log(id);
          
        setCurrentInventory(response.data)
          console.log(currentInventory)
        })
        .catch(error => {
          console.log(error);
        });

        axiosWithAuth()
        .get(`https://farm-fresh-produce-api.herokuapp.com/api/inventory`)
        .then(response => {
          console.log(response.data);
 
        })
        .catch(error => {
          console.log(error);
        });
      

    },[])


    const handleChange = e => {
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
      
      };
      const handleQuantity = e => {
        setNewItemQuantity({
          ...newItemQuantity,
          [e.target.name]: e.target.value
        });
      
      };


      const addNewItem = (e) => {
          e.preventDefault();
        axiosWithAuth()
        .post(`https://farm-fresh-produce-api.herokuapp.com/api/products`, newItem)
        .then(response => {
          console.log(response.data);
          
          
        })
        .catch(error => {
          console.log(error);
        });

        axiosWithAuth()
        .post(`https://farm-fresh-produce-api.herokuapp.com/api/inventory`, newItemQuantity)
        .then(response => {
          console.log(response.data);
          
          
        })
        .catch(error => {
          console.log(error);
        });
      }


    return (
        <Div>
            {currentInventory ? currentInventory.map(item => {
                if(item.farm_id == id) {
                    return(
                        <p>{item.product_name}</p>
                    )
              }
                
            }) : <p>You have no inventory! Add an item!</p> }
            {console.log(currentInventory)}
            <form onSubmit={addNewItem}>
            {/* // POST request: https://farm-fresh-produce-api.herokuapp.com/api/products - Add a product - expects JSON Body {"farm_id", "product_name", "description", "image_url", "price", "unit"} (edited)  */}

                <input 
                type="text"
                name='product_name'
                value={newItem.product_name}
                placeholder='Item Name'
                onChange={handleChange}
                />
                <input 
                type="text"
                name='description'
                value={newItem.description}
                placeholder='Description'
                onChange={handleChange}
                />

            <input 
                type="text"
                name='image_url'
                value={newItem.image_url}
                placeholder='Pick a URL for your image'
                onChange={handleChange}
                />
            <p>Price</p>
            <input 
                type="number"
                name='price'
                value={newItem.price}
                placeholder='price'
                onChange={handleChange}
                />

            <input 
                type="text"
                name='unit'
                value={newItem.unit}
                placeholder='unit'
                onChange={handleChange}
                />
            <p>Quantity</p>
            <input 
                type="text"
                name='quantity_in_stock'
                value={newItemQuantity.quantity_in_stock}
                placeholder='quantity'
                onChange={handleQuantity}
                />

            <button>Add Item!</button>

            </form>
        </Div>
    );
}

export default FarmerInventory;
