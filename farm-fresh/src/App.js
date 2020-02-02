import React from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Products from './components/Products';
import  { Route, Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {

  const PrivateRoute = ({ component: Products, ...rest }) => (
    <Route {...rest} render={(props) => 
        localStorage.getItem('token') ? (
            <Products {...props} />
        ) : (
            <Redirect to='/login-user' />
        )
    } />
)

  return (
    <Router>
      <div className="App">
      <Navigation/>
      
      
      <Route exact  path='/' component={Home} />
      <Route  path='/login-user' component={Login} />
      <Route  path='/register-user' component={Registration} />
      <PrivateRoute  path='/products' component={Products} />
    
      </div>
    </Router>
    
    
  );
}

export default App;