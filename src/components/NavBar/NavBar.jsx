import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const Nav = () => {
    return (

        <nav>
            <div> <h2>HIHOMARKET</h2></div>
                <ul>
                    <li><p>Home</p></li>
                    <li><p>About</p></li>
                    <li><p>Products</p></li>
                    <li><p>Contact</p></li>
                </ul>
                <CartWidget/>
        </nav>
    )
}

export default Nav