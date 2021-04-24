import React, {useState} from 'react'

const ItemCount = ({stock}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockIni, setStockIni] = useState(0);

    const sumar = () => {
        let className = "btn"

        if(stockTotal === 0) {
            className = "btn n"
        } else {
            setStockIni( stockIni + 1)
            setStockTotal (stockTotal - 1)
        }
    }

    const restar = () => {
        let className = "btn"

        if(stockTotal === 0 | stockIni === 0) {
            className = "btn n"
        } else {
            setStockIni( stockIni - 1)
            setStockTotal (stockTotal + 1)
        }
    }
    const add = () => {
        let className = 'btn'
        let compra = stockTotal
        if (compra === 0){
            className = "btn n"
        }
    }
    return (
        <>
        <p className="cantidad">Cantidad en stock: {stockTotal}</p>
        <div className="btn stok">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </div>
        <a href="." className="btn shop" onClick={add}>Comprar</a>
        </>
    )
}
export default ItemCount;