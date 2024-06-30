import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
                <Link to='/products'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/products" className="nav-link" style={{fontSize:"2rem"}}>
                            Products
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i className="fas fa-cart-plus">my cart</i>
                        </ButtonContainer>
                    </Link>
                    <Link to="/" className="ml-auto">
                        <ButtonContainer>
                            <i className="fas fa-sign-out-alt" aria-hidden="false">logout</i>
                        </ButtonContainer>
                    </Link>
                </div>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
