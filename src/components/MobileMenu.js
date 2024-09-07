// src/components/MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu() {
  return (
    <footer className="mobile-menu">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/profile">Profile</Link>
    </footer>
  );
}

export default MobileMenu;
