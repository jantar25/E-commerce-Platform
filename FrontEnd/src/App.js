import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Pay from './Pages/Pay';
import PaySuccess from './Pages/PaySuccess';

function App() {

  const user=true;
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/products/:category"><ProductList /></Route>
        <Route exact path="/product/:id"><Product /></Route>
        <Route exact path="/cart"><Cart /></Route>
        <Route exact path="/register">{user? <Redirect to="/" /> : <Register />}</Route>
        <Route exact path="/login"> {user? <Redirect to="/" /> : <Login />}</Route>
        <Route exact path="/pay"><Pay /></Route>
        <Route exact path="/paysuccess"><PaySuccess /></Route>
      </Switch>
    </Router>
  );
}

export default App;
