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
import raceIcon from '../assets/race.svg'; // Icono de $100K Weekly Race
import originalsIcon from '../assets/originals.svg';
import slotsIcon from '../assets/slots.svg';
import liveCasinoIcon from '../assets/live-casino.svg';
import blackjackIcon from '../assets/blackjack.svg';
import rouletteIcon from '../assets/roulette.svg';
import gameShowsIcon from '../assets/game-shows.svg';
import baccaratIcon from '../assets/baccarat.svg';
import providersIcon from '../assets/providers.svg';
import profileIcon from '../assets/profile.svg';
import vipIcon from '../assets/vip.svg';
import blogIcon from '../assets/blog.svg';
import affiliateIcon from '../assets/affiliate.svg';
import liveSupportIcon from '../assets/live-support.svg';

function Sidebar({ isSidebarExpanded, toggleSidebar }) {
  const [activeButton, setActiveButton] = useState('casino');
  const [activeMenu, setActiveMenu] = useState('home');
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(false);

  return (
    <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Contenedor estático para el icono de menú y botones de Casino/Sports */}
      <div className="sidebar-static">
        <div className={`menu-container ${!isSidebarExpanded ? 'collapsed' : ''}`}>
          <img
            src={hoveredIcon ? menuHoverIcon : menuIcon}
            alt="Menu Icon"
            className="menu-icon"
            onClick={toggleSidebar}
            onMouseEnter={() => setHoveredIcon(true)}
            onMouseLeave={() => setHoveredIcon(false)}
          />

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
      </div>

      {/* Sección de navegación principal con scroll */}
      <div className="sidebar-scrollable">
        <nav className="sidebar-nav">
          <ul>
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

            <li
              className={activeMenu === 'latest-releases' ? 'active' : ''}
              onClick={() => setActiveMenu('latest-releases')}
              onMouseEnter={() => setHoveredMenu('latest-releases')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <img
                src={
                  activeMenu === 'latest-releases' || hoveredMenu === 'latest-releases'
                    ? latestReleasesHoverIcon
                    : latestReleasesIcon
                }
                alt="Latest Releases Icon"
                className="menu-icon"
              />
              {isSidebarExpanded && <span>Latest Releases</span>}
            </li>

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

        <div className="sidebar-divider"></div>

        {/* Sección de $100K Weekly Race */}
        <nav className="sidebar-nav">
          <ul>
            <li className="race-section">
              <img src={raceIcon} alt="$100K Weekly Race Icon" className="menu-icon" />
              {isSidebarExpanded && <span>$100K Weekly Race</span>}
            </li>
          </ul>
        </nav>

        <div className="sidebar-divider"></div>

        {/* Sección de Originals, Slots, etc. */}
        <nav className="sidebar-nav">
          <ul>
            <li><img src={originalsIcon} alt="Originals Icon" /> {isSidebarExpanded && <span>Originals</span>}</li>
            <li><img src={slotsIcon} alt="Slots Icon" /> {isSidebarExpanded && <span>Slots</span>}</li>
            <li><img src={liveCasinoIcon} alt="Live Casino Icon" /> {isSidebarExpanded && <span>Live Casino</span>}</li>
            <li><img src={blackjackIcon} alt="Blackjack Icon" /> {isSidebarExpanded && <span>Blackjack</span>}</li>
            <li><img src={rouletteIcon} alt="Roulette Icon" /> {isSidebarExpanded && <span>Roulette</span>}</li>
            <li><img src={gameShowsIcon} alt="Game Shows Icon" /> {isSidebarExpanded && <span>Game Shows</span>}</li>
            <li><img src={baccaratIcon} alt="Baccarat Icon" /> {isSidebarExpanded && <span>Baccarat</span>}</li>
            <li><img src={providersIcon} alt="Providers Icon" /> {isSidebarExpanded && <span>Providers</span>}</li>
          </ul>
        </nav>

        <div className="sidebar-divider"></div>

        {/* Sección de Profile */}
        <nav className="sidebar-nav">
          <ul>
            <li><img src={profileIcon} alt="Profile Icon" /> {isSidebarExpanded && <span>Profile</span>}</li>
          </ul>
        </nav>

        <div className="sidebar-divider"></div>

        {/* Sección de VIP, Blog, Affiliate, etc. */}
        <nav className="sidebar-nav">
          <ul>
            <li><img src={vipIcon} alt="VIP Icon" /> {isSidebarExpanded && <span>VIP</span>}</li>
            <li><img src={blogIcon} alt="Blog Icon" /> {isSidebarExpanded && <span>Blog</span>}</li>
            <li><img src={affiliateIcon} alt="Affiliate Icon" /> {isSidebarExpanded && <span>Affiliate</span>}</li>
            <li><img src={liveSupportIcon} alt="Live Support Icon" /> {isSidebarExpanded && <span>Live Support</span>}</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
