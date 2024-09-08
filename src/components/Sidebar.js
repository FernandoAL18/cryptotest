import React, { useState } from 'react';
import './Sidebar.css';
import menuIcon from '../assets/menu.svg';
import menuHoverIcon from '../assets/menu-hover.svg';
import homeIcon from '../assets/home.svg';
import homeHoverIcon from '../assets/home-hover.svg';
import casinoMenuIcon from '../assets/casino-menu.svg';
import sportsMenuIcon from '../assets/sports-menu.svg';
import favouritesIcon from '../assets/favourites.svg';
import favouritesHoverIcon from '../assets/favourites-hover.svg';
import latestReleasesIcon from '../assets/latest-releases.svg';
import latestReleasesHoverIcon from '../assets/latest-releases-hover.svg';
import challengesIcon from '../assets/challenges.svg';
import challengesHoverIcon from '../assets/challenges-hover.svg';

function Sidebar({ isSidebarExpanded, toggleSidebar }) {
  const [activeButton, setActiveButton] = useState('casino');
  const [activeMenu, setActiveMenu] = useState('home');
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(false);

  return (
    <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <div className={`menu-container ${!isSidebarExpanded ? 'collapsed' : ''}`}>
        <img
          src={hoveredIcon ? menuHoverIcon : menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleSidebar}
          onMouseEnter={() => setHoveredIcon(true)}
          onMouseLeave={() => setHoveredIcon(false)}
        />

        {/* Botones para Casino y Sports en modo expandido */}
        {isSidebarExpanded && (
          <div className="menu-options">
            <button
              className={`casino-btn ${activeButton === 'casino' ? 'active' : ''}`}
              onClick={() => setActiveButton('casino')}
            >
              Casino
            </button>
            <button
              className={`sports-btn ${activeButton === 'sports' ? 'active' : ''}`}
              onClick={() => setActiveButton('sports')}
            >
              Sports
            </button>
          </div>
        )}
      </div>

      {/* Botones para Casino y Sports en modo colapsado, debajo del menú */}
      {!isSidebarExpanded && (
        <div className="menu-options-collapsed">
          <div
            className={`casino-btn-collapsed ${activeButton === 'casino' ? 'active' : ''}`}
            onClick={() => setActiveButton('casino')}
          >
            <img src={casinoMenuIcon} alt="Casino Icon" />
          </div>
          <div
            className={`sports-btn-collapsed ${activeButton === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveButton('sports')}
          >
            <img src={sportsMenuIcon} alt="Sports Icon" />
          </div>
        </div>
      )}

      {/* Sección de navegación */}
      <nav className="sidebar-nav">
        <ul>
          {/* Home */}
          <li
            className={activeMenu === 'home' ? 'active' : ''}
            onClick={() => setActiveMenu('home')}
            onMouseEnter={() => setHoveredMenu('home')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <img
              src={activeMenu === 'home' || hoveredMenu === 'home' ? homeHoverIcon : homeIcon}
              alt="Home Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Home</span>}
          </li>

          {/* División */}
          <div className="sidebar-divider"></div>

          {/* Favourites */}
          <li
            className={activeMenu === 'favourites' ? 'active' : ''}
            onClick={() => setActiveMenu('favourites')}
            onMouseEnter={() => setHoveredMenu('favourites')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <img
              src={activeMenu === 'favourites' || hoveredMenu === 'favourites' ? favouritesHoverIcon : favouritesIcon}
              alt="Favourites Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Favourites</span>}
          </li>

          {/* División */}
          <div className="sidebar-divider"></div>

          {/* Latest Releases */}
          <li
            className={activeMenu === 'latest-releases' ? 'active' : ''}
            onClick={() => setActiveMenu('latest-releases')}
            onMouseEnter={() => setHoveredMenu('latest-releases')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <img
              src={activeMenu === 'latest-releases' || hoveredMenu === 'latest-releases' ? latestReleasesHoverIcon : latestReleasesIcon}
              alt="Latest Releases Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Latest Releases</span>}
          </li>

          {/* División */}
          <div className="sidebar-divider"></div>

          {/* Challenges */}
          <li
            className={activeMenu === 'challenges' ? 'active' : ''}
            onClick={() => setActiveMenu('challenges')}
            onMouseEnter={() => setHoveredMenu('challenges')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <img
              src={activeMenu === 'challenges' || hoveredMenu === 'challenges' ? challengesHoverIcon : challengesIcon}
              alt="Challenges Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Challenges</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
