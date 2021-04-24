import React, {useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../components/Items/ItemList'
import loader from '../img/loader.gif'

export default function ItemListContainer() {

    const [arrayItems, setArrayItems] = useState([])
    
    useEffect(()=>{
        let listaNueva = new Promise((resolve, reject) => {
            const catalogo = [
                {
                    id: 1,
                    imag: '/images/birra.jpg',
                    description: 'birra destacada',
                    title: 'lala',
                    price: '300',
                    stockIni: '35'
        
                },
                {
                    id: '2',
                    imag:'./images/birra.jpg',
                    description: 'birra destacada',
                    title: 'lala',
                    price: '300',
                    stockIni: '23'
                
                },
                {
                    id: '3',
                    imag:'/images/botella.png',
                    description: 'birra destacada',
                    title: 'lala',
                    price: '300',
                    stockIni: '20'
                },
                {
                    id: '4',
                    imag:'/images/botella2.jpeg',
                    description: 'birra destacada',
                    title: 'lala',
                    price: '300',
                    stockIni: '30'
                }
            ];
        
            setTimeout(() =>{
                resolve(catalogo)
            }, 2000)
        })
    
        listaNueva.then((res)=>{
            // console.log(res);
            setArrayItems(res);
        })
        .catch(()=>{
            console.log("OJO, hay un problema")
        })
        .finally(()=>{
            console.log("Error finalizado, bye")
        })

    }, [])
    return(
        <div classNam="contenedor">
            <div className="row">
                {arrayItems.length > 0 ? <ItemList productos={arrayItems}/> : <img src={loader} alt="product" className="loader"/> }
            </div>
        </div>
    )      
}