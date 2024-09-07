// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage'; // Asegúrate de que este componente maneje varios juegos
import ProfilePage from './pages/ProfilePage';
import LeBanditGame from './pages/LeBanditGame'; // Importa el componente correctamente


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
    <Router>
      <div className={`app ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
        <Header />
        <div className="main-content">
          {!isMobile && (
            <Sidebar isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
          )}
          <section className="content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/casino/games/le-bandit" element={<LeBanditGame />} />
            </Routes>
          </section>
        </div>
        {isMobile && <MobileMenu />}
      </div>
    </Router>
  );
}

export default App;
