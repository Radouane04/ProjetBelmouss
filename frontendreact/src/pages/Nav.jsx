import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Nav() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src='images/logo.png' alt=''/> 
      </div>
      <ul className="nav-menu">
        <li><Link to='/' style={{textDecoration:'none'}}>Acceuil</Link></li>
        <li style={{textDecoration:'none'}} className="nav-menu-select">
          <div>
            <a href="#">Nos produits</a>
            <ul id="submenu">
              <li><Link to='/AcheterBois'>Bois</Link></li>
              <li><Link to='/AcheterProduit'>Produits en bois</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to='/Projet' title='go to minuisier'>Projets</Link></li>
        <li><Link to='/Description' title='go to description'>À propos de nous</Link></li>
        <li><Link to='/contact' title='go to contact' style={{textDecoration:'none'}}>Contact</Link></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-up" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
          </svg>
        </Link>
        <Link to='/panier' style={{ position: 'relative' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          {cartItemCount > 0 && (
            <span className="badge" style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: 'radial-gradient(circle, #D78C3D, #4B2E20)',
              color: 'white',
              borderRadius: '50%',
              padding: '5px 10px',
              fontSize: '11px'
            }}>
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
  </div>
  );
}