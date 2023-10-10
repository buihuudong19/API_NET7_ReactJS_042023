import React, { Component } from "react";

import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

import { Navbar, NavItem, Icon } from "react-materialize";


export default function Navigation(){

        const { theme, toggle, dark } = useContext(ThemeContext)
        return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to='/' style={{color: theme.color }} className="nav-item nav-link active"> Home</Link>
                        <a style={{color: theme.color }} href="index.html" className="nav-item nav-link active">Home Old</a>
                        <a style={{color: theme.color }} href="shop.html" className="nav-item nav-link">Shop</a>
                        <a style={{color: theme.color }} href="detail.html" className="nav-item nav-link">Shop Detail</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                <a href="checkout.html" className="dropdown-item">Checkout</a>
                            </div>
                        </div>
                        <Link  className="nav-item nav-link" style={{color: theme.color }} to={`/contact`}>Contact</Link>
                        {/* <a style={{color: theme.color }} href="contact.html" className="nav-item nav-link">Contact</a> */}
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                        <a href="" className="nav-item nav-link">Login</a>
                        <a href="" className="nav-item nav-link">Register</a>
                    </div>
                </div>

                <div style={{position: 'relative'}}>
                    <a className='switch-mode' href='#' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn"
                    >
                    Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        )
    
}