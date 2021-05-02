import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './NavBar.css'


const Nav = () => {
    return (

        <nav>
            <div> <h2 className="logo">HIHOMARKET</h2></div>
                <ul>
                    <li><Link to="/" className="menu">Home</Link></li>
                    <li><Link to="" className="menu">About</Link></li>
                    <li><Link to="" className="menu">Products</Link></li>
                    <li><Link to="" className="menu">Contact</Link></li>
                </ul>
                <CartWidget/>
        </nav>
    )
}

export default Nav