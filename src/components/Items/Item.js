import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({img, price, title, description, stock, categoryId}) => {

    return (
        <div className="product-container">
            <div className="product-image-wrapper">
               <img src={img} className="product-image-link img-fluid" alt="producto"/>
            </div>

          <div className="item-info-producto">
              <h4 className="product-title">
                  <Link to="/ItemDetailContainer">{title}</Link>
              </h4>
              <div className="product-description mb-4">{description}</div>
              <div className="item-amount-container">
                  
               <Link className="item-btn my-3" to={`/ItemDetailContainer`}>Ver mas...</Link>
               </div>
            </div>
        </div>
    )
}

export default Item;