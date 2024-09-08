import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';
import menuIcon from '../assets/icons/menu.svg';
import searchIcon from '../assets/icons/search.svg';
import chatIcon from '../assets/icons/chat.svg';
import rewardsIcon from '../assets/icons/rewards.svg';
import sportsIcon from '../assets/icons/sports.svg';

function MobileMenu() {
  return (
    <footer className="mobile-menu">
      <Link to="/" className="mobile-menu-item">
        <img src={menuIcon} alt="Menu" />
        <span>Menu</span>
      </Link>
      <Link to="/search" className="mobile-menu-item">
        <img src={searchIcon} alt="Search" />
        <span>Search</span>
      </Link>
      <Link to="/chat" className="mobile-menu-item">
        <img src={chatIcon} alt="Chat" />
        <span>Chat</span>
      </Link>
      <Link to="/rewards" className="mobile-menu-item">
        <img src={rewardsIcon} alt="Rewards" />
        <span>Rewards</span>
      </Link>
      <Link to="/sports" className="mobile-menu-item">
        <img src={sportsIcon} alt="Sports" />
        <span>Sports</span>
      </Link>
    </footer>
  );
}

export default MobileMenu;
