import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavMenu from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget';
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/cart" exact component={CartWidget} />
        <Route path='/ItemDetailContainer/:category' extact component={ItemDetailContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
