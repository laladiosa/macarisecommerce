import React, {useState} from 'react'
import './ItemCount.css'
import '../Items/Item.css'
import {Link} from 'react-router-dom'

const ItemCount = ({stock}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockIni, setStockIni] = useState(0);

    const sumar = () => {
        // let className = "btn"

        if(stockTotal === 0) {
            // className = "btn n"
        } else {
            setStockIni( stockIni + 1)
            setStockTotal (stockTotal - 1)
        }
    }

    const restar = () => {
        // let className = "btn"

        if(stockTotal === 0 | stockIni === 0) {
            // className = "btn n"
        } else {
            setStockIni( stockIni - 1)
            setStockTotal (stockTotal + 1)
        }
    }
    const add = () => {
        if(stockIni > 0){
            return (
                alert('Agregaste : '+ stockIni + ' al carrito')
            )
        }
    }
    return (
        <>
        <p className="cantidad">Cantidad en stock: {stockTotal}</p>
        <div className="item-amount">
            <div className="item-amount-container">
            <span className="item-amount-minus" onClick={restar}>-</span>
            <span className="item-amount-field">{stockIni}</span>
            <span className="item-amount-plus" onClick={sumar}>+</span>
            </div>
        </div>
        <Link to="/" className="item-btn" onClick={add}>Comprar</Link>
        </>
    )
}
export default ItemCount;