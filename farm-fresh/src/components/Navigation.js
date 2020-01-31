import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
        </div>
    );
};

export default Navigation;