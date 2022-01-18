import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProductList from './Pages/ProductList'
import PaySuccess from './Pages/PaySuccess';
import PasswordForget from './Pages/PasswordForget';
import ScrollToTop from './Pages/scrollToTop' 
import { useSelector } from 'react-redux';


function App() {

  const user=useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/products/:category"><ProductList /></Route>
        <Route exact path="/cart"><Cart /></Route>
        <Route exact path="/register">{user? <Redirect to="/" /> : <Register />}</Route>
        <Route exact path="/login"> {user? <Redirect to="/" /> : <Login />}</Route>
        <Route exact exact path="/password"><PasswordForget /></Route>
        <Route exact path="/paysuccess"><PaySuccess /></Route>
      </Switch>
    </Router>
  );
}

export default App;
