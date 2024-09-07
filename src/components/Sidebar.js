import React, { useState } from 'react';
import './Sidebar.css';
import menuIcon from '../assets/menu.svg';
import menuHoverIcon from '../assets/menu-hover.svg'; // Icono de hover para el menú
import homeIcon from '../assets/home.svg';
import homeHoverIcon from '../assets/home-hover.svg'; // Icono de hover para Home
import casinoMenuIcon from '../assets/casino-menu.svg';
import sportsMenuIcon from '../assets/sports-menu.svg';
import favouritesIcon from '../assets/favourites.svg'; // Icono de Favourites
import favouritesHoverIcon from '../assets/favourites-hover.svg'; // Icono de hover para Favourites
import latestReleasesIcon from '../assets/latest-releases.svg'; // Icono de Latest Releases
import latestReleasesHoverIcon from '../assets/latest-releases-hover.svg'; // Icono de hover para Latest Releases
import challengesIcon from '../assets/challenges.svg'; // Icono de Challenges
import challengesHoverIcon from '../assets/challenges-hover.svg'; // Icono de hover para Challenges

function Sidebar({ isSidebarExpanded, toggleSidebar }) {
  const [activeButton, setActiveButton] = useState('casino');
  const [activeMenu, setActiveMenu] = useState('home');
  const [hoveredMenu, setHoveredMenu] = useState(null); // Estado para el hover del menú
  const [hoveredIcon, setHoveredIcon] = useState(false); // Estado para el hover del menú

  return (
    <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <div className={`menu-container ${!isSidebarExpanded ? 'collapsed' : ''}`}>
        <img
          src={hoveredIcon ? menuHoverIcon : menuIcon} // Cambia al ícono de hover cuando esté en hover
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleSidebar}
          onMouseEnter={() => setHoveredIcon(true)}  // Activa el hover del ícono del menú
          onMouseLeave={() => setHoveredIcon(false)} // Desactiva el hover del ícono del menú
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
            onMouseEnter={() => setHoveredMenu('home')} // Activa el hover del Home
            onMouseLeave={() => setHoveredMenu(null)}   // Desactiva el hover del Home
          >
            <img
              src={activeMenu === 'home' || hoveredMenu === 'home' ? homeHoverIcon : homeIcon}
              alt="Home Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Home</span>}
          </li>

          {/* Favourites */}
          <li
            className={activeMenu === 'favourites' ? 'active' : ''}
            onClick={() => setActiveMenu('favourites')}
            onMouseEnter={() => setHoveredMenu('favourites')} // Activa el hover de Favourites
            onMouseLeave={() => setHoveredMenu(null)}   // Desactiva el hover de Favourites
          >
            <img
              src={activeMenu === 'favourites' || hoveredMenu === 'favourites' ? favouritesHoverIcon : favouritesIcon}
              alt="Favourites Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Favourites</span>}
          </li>

          {/* Latest Releases */}
          <li
            className={activeMenu === 'latest-releases' ? 'active' : ''}
            onClick={() => setActiveMenu('latest-releases')}
            onMouseEnter={() => setHoveredMenu('latest-releases')} // Activa el hover de Latest Releases
            onMouseLeave={() => setHoveredMenu(null)}   // Desactiva el hover de Latest Releases
          >
            <img
              src={activeMenu === 'latest-releases' || hoveredMenu === 'latest-releases' ? latestReleasesHoverIcon : latestReleasesIcon}
              alt="Latest Releases Icon"
              className="menu-icon"
            />
            {isSidebarExpanded && <span>Latest Releases</span>}
          </li>

          {/* Challenges */}
          <li
            className={activeMenu === 'challenges' ? 'active' : ''}
            onClick={() => setActiveMenu('challenges')}
            onMouseEnter={() => setHoveredMenu('challenges')} // Activa el hover de Challenges
            onMouseLeave={() => setHoveredMenu(null)}   // Desactiva el hover de Challenges
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
