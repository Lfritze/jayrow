import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from "./screens/CartScreen";
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Fritze Cards</Link>
        </div>
        <div className="header-links">
          <a href="/cart/:id?">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <aside className="sidebar">
        <h3>Manufacturers</h3>
        <button className="sidebar-close-button" onClick={closeMenu}><i className="fas fa-times-circle"></i></button>
        <ul className="categories">
          <li className="topps-logo">
            <Link to="/category/Topps">Topps</Link>
          </li>
          <li>
            <Link to="/category/Donruss">Donruss</Link>
          </li>
          <li>
            <Link to="/category/UpperDeck">Upper Deck</Link>
          </li>
          <li>
            <Link to="/category/Fleer">Fleer</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path ="/signin" component={SigninScreen} />
          <Route path ="/register" component={RegisterScreen} />
          <Route path ="/product/:id" component={ProductScreen} />
          <Route path ="/products" component={ProductsScreen} />
          <Route path ="/cart/:id?" component ={CartScreen} />
          <Route path ="/shipping" component={ShippingScreen} />
          <Route path ="/payment" component={PaymentScreen} />
          <Route path ="/placeorder" component ={PlaceOrderScreen} />
          <Route path ="/order/:id" component ={OrderScreen} />
          <Route path ="/orders" component ={OrdersScreen} />
          <Route path ="/profile" component ={ProfileScreen} />
          <Route path ="/category/:id" component ={HomeScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          
        </div>
      </main>
      <footer className="footer">
        Fritze Cards - All rights reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;


// <a href="/cart/:id?">Cart</a>

// https://www.udemy.com/course/build-ecommerce-website-like-amazon-react-node-mongodb/learn/lecture/17889786#questions
// 1:30