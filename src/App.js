import './App.css';
import Nav from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer';
import './style.css'

function App() {
  return (
    <div className="App">
      <header className="">
      <Nav></Nav>
      </header>

      
      <ItemListContainer greeting="Bienvenido a mi carrito de compras!"/>
    </div>


    //------------ CLASE 02 y 03 -------------------- //
    // <div className="App">
    //   <header className="App-header">
    //   <ButtonCl text={'SOY EL NUEVOTE BEB'} numer={1} color={'red'}padding={'35px'}/>
    //   {/* <ButtonFl/> */}

    //   <div style={{height: '50vh', width:'100vh'}}>
    //   Contenido de la home
    //   </div>
    //   <ButtonCl suma2={suma2} text={'VENI PA CA'} numer={1} color={'blue'} padding={'15px'}/>

    //   </header>
    // </div>
  );
}

export default App;
