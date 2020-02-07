import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../tools/axiosAuth';
import styled from 'styled-components';
import InventoryItem from './InventoryItem';

const Div = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

.inventory-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
}

`

const FarmerInventory = () => {
    let id = localStorage.getItem("farmId");
    let inventoryTarget ={};

    const [currentProducts, setCurrentProducts] = useState([{}]);
    const [currentQuantity, setCurrentQuantity] = useState([]);

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
      //axios call to get products 
        axiosWithAuth()
        .get(`https://farm-fresh-produce-api.herokuapp.com/api/products`)
        .then(response => {
          // console.log(response.data);
          // console.log(id);
          
        setCurrentProducts(response.data)
          console.log(currentProducts)
        })
        .catch(error => {
          console.log(error);
        });

        axiosWithAuth()
        // axios call to get item quantities
        .get(`https://farm-fresh-produce-api.herokuapp.com/api/inventory`)
        .then(response => {
          console.log(response.data);

          setCurrentQuantity([response.data])
          console.log(currentQuantity);
 
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
          
        axiosWithAuth()
        //Posts to new item to prooducts endpoint
        .post(`https://farm-fresh-produce-api.herokuapp.com/api/products`, newItem)
        .then(response => {
          console.log(response.data);
          
          
        })
        .catch(error => {
          console.log(error);
        });

        axiosWithAuth()
        //posts how many of the new item there are. 
        .post(`https://farm-fresh-produce-api.herokuapp.com/api/inventory`, newItemQuantity)
        .then(response => {
          console.log(response.data);
          
          
        })
        .catch(error => {
          console.log(error);
        });
      }

      const deleteItem = (id) => {
        axiosWithAuth()
        //posts how many of the new item there are. 
        .delete(`https://farm-fresh-produce-api.herokuapp.com/api/products/${id}`, newItemQuantity)
        .then(response => {
          console.log(response.data);
          let result = currentProducts.filter(item => {
            return item.id !== response.data
          })

          setCurrentProducts(result)
          
        })
        .catch(error => {
          console.log(error);
        });
        
      }

      const updateItem =(id, item) => {
        axiosWithAuth()
        //posts how many of the new item there are. 
        .put(`https://farm-fresh-produce-api.herokuapp.com/api/products/${id}`, item)
        .then(response => {
          console.log(response.data);
          let result = currentProducts.map(item => {
            if(item.id === response.data.id) {
              item =  response.data
            }
          })

          setCurrentProducts(result)
          
        })
        .catch(error => {
          console.log(error);
        });
      }


    return (
        <Div>
          <div className="inventory-items">
          {currentProducts ? currentProducts.map(item => {
                if(item.farm_id == id) {
                  
                  

                    return(
                        <InventoryItem
                        item={item}
                        image={item.image_url}
                        name={item.product_name}
                        quantity={inventoryTarget}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                        
                      />
                    )
              }
                
            }) : <p>You have no inventory! Add an item!</p> }
          </div>
            <form onSubmit={addNewItem}>
       

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
