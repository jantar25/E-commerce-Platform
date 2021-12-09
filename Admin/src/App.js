import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/LoginAdmin";
import { useState,useEffect} from "react";

function App() {

      const [admin, setAdmin] = useState(null);

      useEffect(() => {
      { /*
          setInterval was used in order to refresh the page constantly
      in order to have the "logout" button show immediately in place of
      "login", as soon as user logs out.
      */}
          setInterval(() => {
              const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.isAdmin;
              setAdmin(user);
              }, 5000)
      },[]);
      console.log(admin)
  return (
    <Router>
     <Switch>
      { !admin? (<Route path="/"><Login /></Route>) : (<>
             <Topbar />
              <div className="container">
                <Sidebar />
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/users">
                    <UserList />
                  </Route>
                  <Route path="/user/:userId">
                    <User />
                  </Route>
                  <Route path="/newUser">
                    <NewUser />
                  </Route>
                  <Route path="/products">
                    <ProductList />
                  </Route>
                  <Route path="/product/:productId">
                    <Product />
                  </Route>
                  <Route path="/newproduct">
                    <NewProduct />
                  </Route>
              </div>
              </>)}
      </Switch>
    </Router>
  );
}

export default App;
