// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ProfilePage from './pages/ProfilePage';
import AllSlotsPage from './pages/AllSlotsPage';
import LeBanditGame from './pages/LeBanditGame';
import ZeusVsHadesGame from './pages/ZeusVsHadesGame';
import WantedDeadOrAWildGame from './pages/WantedDeadOrAWildGame';
import TheDogHouseGame from './pages/TheDogHouseGame';
import TaiTheToadGame from './pages/TaiTheToadGame';
import SweetBonanzaGame from './pages/SweetBonanzaGame';
import SugarRushGame from './pages/SugarRushGame';
import RipCityGame from './pages/RipCityGame';
import OldGunGame from './pages/OldGunGame';
import MoneyStacksGame from './pages/MoneyStacksGame';

// Import the PopOutProvider
import { PopOutProvider } from './context/PopOutContext';

function App() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <PopOutProvider> {/* Wrap the app in PopOutProvider */}
      <Router>
        <div className={`app ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
          <Header />
          <div className="main-content">
            {!isMobile && (
              <Sidebar isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
            )}
            <section className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/casino/slots" element={<AllSlotsPage />} />
                <Route path="/casino/games/le-bandit" element={<LeBanditGame />} />
                <Route path="/casino/games/zeus-vs-hades" element={<ZeusVsHadesGame />} />
                <Route path="/casino/games/wanted-dead-or-a-wild" element={<WantedDeadOrAWildGame />} />
                <Route path="/casino/games/the-dog-house" element={<TheDogHouseGame />} />
                <Route path="/casino/games/tai-the-toad" element={<TaiTheToadGame />} />
                <Route path="/casino/games/sweet-bonanza" element={<SweetBonanzaGame />} />
                <Route path="/casino/games/sugar-rush" element={<SugarRushGame />} />
                <Route path="/casino/games/rip-city" element={<RipCityGame />} />
                <Route path="/casino/games/old-gun" element={<OldGunGame />} />
                <Route path="/casino/games/money-stacks" element={<MoneyStacksGame />} />
              </Routes>
            </section>
          </div>
          {isMobile && <MobileMenu />}
        </div>
      </Router>
    </PopOutProvider>
  );
}

export default App;