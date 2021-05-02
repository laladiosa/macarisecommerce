import React from 'react';
import Item from './Item';


const ItemList = ({productos}) => {
    return (
        <>
        {productos.map((arrayItems) =>
        <div key={arrayItems.id} className="row ml-3">
            <Item img={arrayItems.imag} title={arrayItems.title} description={arrayItems.description} price={arrayItems.price} stock={arrayItems.stockIni} categoryId={arrayItems.category}/>
        </div>
        )}
        </>

    )
}
export default ItemList;