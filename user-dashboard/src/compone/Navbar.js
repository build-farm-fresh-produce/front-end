import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import cart from '../cart.png';
import styled from 'styled-components';
import { ButtonContainer } from "./Button"

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <img src={cart} alt="cart" />
                        </span>
                        My Cart
                    </ButtonContainer>

                </Link>

            </NavWrapper>

        );
    }
}

const NavWrapper = styled.nav`
    background: #f2f2f2;
    .nav-link{
        color:#008000 !important;
        font-sized:1.3rem;
        text-transform: capitalize;
    }
`;