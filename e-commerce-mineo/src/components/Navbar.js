import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
import Catalogo from './Catalogo/Catalogo';
import Home from './Home/Home';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
<header className='navbar'>
    <ul>
        <li><Link to="/">Futura Brand</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="#">Nosotros</Link></li>
        <li><Link to="#">Contacto</Link></li>
        <CartWidget />
    </ul>

</header>

  );
}

export default Navbar;