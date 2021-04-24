import React from 'react';
import Item from './Item';


const ItemList = ({productos}) => {
    return (
        <>
        <div className="catalogo">Catalogo</div>
        {productos.map((arrayItems) =>
        <div key={arrayItems.id} className="col-lg-3 shop=info-grid mt-4">
            <Item img={arrayItems.imag} title={arrayItems.title} description={arrayItems.description} price={arrayItems.price} stock={arrayItems.stockIni}/>
        </div>
    )}
    </>

    )
}
export default ItemList;