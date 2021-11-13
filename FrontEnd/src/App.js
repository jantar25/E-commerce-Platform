import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Pay from './Pages/Pay';
import PaySuccess from './Pages/PaySuccess';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pay"><Pay /></Route>
        <Route path="/paysuccess"><PaySuccess /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
