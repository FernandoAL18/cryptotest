import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg'; // Importar el logo
import BalanceContainer from './BalanceContainer'; // Importar el BalanceContainer

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo" className="logo" /> {/* Logo agregado */}
      
      <div className="header-center"> {/* Centrar BalanceContainer y Wallet */}
        <BalanceContainer />
      </div>
    </header>
  );
}

export default Header;
