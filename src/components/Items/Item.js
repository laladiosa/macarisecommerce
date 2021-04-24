import React from 'react'
import ItemCount from '../Contador/ItemCount';

const Item = ({img, price, title, description, stock}) => {

    return (
        <div className="product-info">
            <div className="artc-img-item">
               <img src={img} className="img-fluid" alt="producto"/>
            </div>

          <div className="item-info-producto">
              <h4>
                  <a href=".">{title}</a>
              </h4>
              <div>{description}</div>
              <div className="producto_precio">
                  <div className="grid-precio">
                       <span className="money">${price}</span>
                   </div>
               </div>
               <div>
                   <ItemCount stock={stock}/>
               </div>
            </div>
        </div>
    )
}

export default Item;
