import React, {useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../components/Items/ItemList'
import { useParams } from 'react-router-dom'
import loader from '../img/loader.gif'
import getdata from '../database/data'

export default function ItemListContainer() {

    const [arrayItems, setArrayItems] = useState([])
    
    const { categoryId } = useParams()

    useEffect(()=>{
        let listaNueva = new Promise((resolve, reject) => {
        
            setTimeout(() =>{
                resolve(getdata())
            }, 2000)
        })
    
        listaNueva.then((res)=>{
            // console.log(res);
            (categoryId === undefined) ? setArrayItems(res) : setArrayItems(res.filter(e => e.category === categoryId));
        })
        .catch(()=>{
            console.log("OJO, hay un problema")
        })
        .finally(()=>{
            console.log("Error finalizado, bye")
        })

    }, [categoryId])
    return(
        <div className="contenedor">
            <div className="catalogo">Catalogo</div>
            <div className="container contenedor_productos">
                {arrayItems.length > 0 ? <ItemList productos={arrayItems}/> : <img src={loader} alt="product" className="loader"/> }
            </div>
        </div>
    )      
}