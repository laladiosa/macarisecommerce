import React, {useState, useEffect} from 'react'
import ItemDetail from '../components/Items/ItemDetail'
import loader from '../img/loader.gif'
import DataBase from '../database/data'




const ItemDetailContainer = () => {

    const [Items, setItems] = useState([])

    useEffect(()=>{
        const productos = DataBase
        
        const task = new Promise(() => {
            setTimeout(() =>{
                setItems(productos)
            },500)
            })
        task.then((res) => {
                console.log("res", res)
            }, (rej) =>{
                console.log("rej", rej)
            })
            .catch((err) =>{
                console.log("Hubo un error", err)
            })
            .finally(() =>{
                console.log("Fin")
            })               
    },[])


    return (
            <div className="contenedor">
                <div className="catalogo">Catalogo</div>
                    <div className="container contenedor_productos">
                    {Items.length > 0 ? <ItemDetail productos={Items}/> : <img src={loader} alt="product" className="loader"/> }
                </div>
            </div>
            )
}

export default ItemDetailContainer
