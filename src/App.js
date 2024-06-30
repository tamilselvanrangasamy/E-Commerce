import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import Login from './components/Login';

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route exact path="/products" element={
            <>
              <Navbar></Navbar>
              <ProductList></ProductList>
            </>} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Default></Default>} />
        </Routes>
        <Modal />
      </React.Fragment>

    </>
  );
}

export default App;
