import React from 'react'
import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap'
import ItemDetails from './components/ItemDetails';
import { Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CategoryNavbar } from './components/CategoryNavbar';
import { CartContext, CartProvider } from './components/context/useContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryNavbar />
      <CartProvider>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
        <Route path="/category/:catId" element={< ItemListContainer greeting={'FILTRADO'} />}></Route>
        <Route path="/item/:productsId" element={< ItemDetailContainer />}></Route>
        <Route path="*" element={< NotFound />}></Route>
        <Route path="/cart" element={< Cart />}></Route>
      </Routes>
      </CartProvider>
      

    </div>
  );
}

export default App;
