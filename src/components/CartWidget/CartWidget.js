import React from 'react'
import './CartWidget.css'
import { Link } from "react-router-dom";



export default function CartWidget() {
    return (
        <div>
            <Link class="nav-link" to="/cart">
            <p className="car-color">Carrito<span>0</span></p>
            </Link>
        </div>
    )
}
