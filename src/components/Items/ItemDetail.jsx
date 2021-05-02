import React from 'react'
// import './ItemDetail.css'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import ItemCount from '../Contador/ItemCount'
import './Item.css'
const ItemDetail = ({productos}) => {
    return ( 
        <React.Fragment>
            {productos.map((datos) => 
                            <div className="product-container">
                            <div className="product-image-wrapper">
                               <img src={datos.imag} className="product-image-link img-fluid" alt="producto"/>
                            </div>
                
                          <div className="item-info-producto">
                              <h4 className="product-title">
                                  <Link to="/ItemDetailContainer">{datos.title}</Link>
                              </h4>
                              <div className="product-description">{datos.description}</div>
                              <div className="item-amount-container">
                                  <div className="item-amount">
                                       <span>${datos.price}</span>
                                   </div>
                               </div>
                               <Link className="producto__ItemDetail" to={`/`}>Ver mas...</Link>
                               <div>
                                   <ItemCount stock={datos.stockIni}/>
                               </div>
                            </div>
                        </div>
            )}
        </React.Fragment>
    )
}

export default ItemDetail