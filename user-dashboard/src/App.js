import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './compone/Navbar';
import ProductList from './compone/ProductList';
import Details from './compone/Details';
import Cart from './compone/Cart';
import Default from './compone/Default';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
