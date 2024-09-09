// src/components/GameArea.js
import React, { useState } from 'react';
import './GameArea.css';
import expandIcon from '../assets/icons/game-container/expand.svg';
import popOutIcon from '../assets/icons/game-container/pop-out.svg';
import theatreModeIcon from '../assets/icons/game-container/theatre-mode.svg';
import statsIcon from '../assets/icons/game-container/stats.svg';
import favouriteIcon from '../assets/icons/game-container/favourite.svg';
import logo from '../assets/icons/game-container/logo.png';
import PopOutWindow from './PopOutWindow'; // Importa la ventana flotante

function GameArea({ gameLink }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const [isPopOutActive, setPopOutActive] = useState(false); // Nuevo estado para el pop-out

  const startDemoGame = () => {
    setGameStarted(true);
  };

  // Activar el pop-out
  const handlePopOut = () => {
    setPopOutActive(true);
  };

  // Cerrar el pop-out
  const closePopOut = () => {
    setPopOutActive(false);
  };

  return (
    <div>
      {/* Área del juego */}
      <div className="game-area">
        {!isGameStarted ? (
          <div className="game-options">
            <div className="balance-selector">
              <span>Balance In</span>
              <select>
                <option>USD</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>

            <div className="play-options">
              <button className="fun-play-btn" onClick={startDemoGame}>
                Fun Play
              </button>
            </div>
          </div>
        ) : isPopOutActive ? (
          // Si el pop-out está activo, mostrar el mensaje
          <div className="pop-out-active-message">
            <h2>Pop Out Active</h2>
            <p>Close the pop-out window to continue playing here.</p>
          </div>
        ) : (
          // Mostrar el juego si el pop-out no está activo
          <iframe
            src={gameLink}
            title="Slot Game"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>

      {/* Contenedor de opciones debajo del área del juego */}
      <div className="game-options-container">
        {/* Iconos de la izquierda */}
        <div className="icon-options">
          <button className="icon-btn">
            <img src={expandIcon} alt="Full Screen" />
            <div className="tooltip">Full Screen</div>
          </button>
          <button className="icon-btn" onClick={handlePopOut}>
            <img src={popOutIcon} alt="Pop Out" />
            <div className="tooltip">Pop Out</div>
          </button>
          <button className="icon-btn">
            <img src={theatreModeIcon} alt="Theatre Mode" />
            <div className="tooltip">Theatre Mode</div>
          </button>
          <button className="icon-btn">
            <img src={statsIcon} alt="Stats" />
            <div className="tooltip">Stats</div>
          </button>
          <button className="icon-btn">
            <img src={favouriteIcon} alt="Favourite" />
            <div className="tooltip">Favourite</div>
          </button>
        </div>

        {/* Logo en el centro */}
        <div className="center-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Botones de la derecha */}
        <div className="game-toggle">
          <button className="game-option-btn">Real</button>
          <button className="game-option-btn">Fun</button>
        </div>
      </div>

      {/* Ventana flotante Pop-out */}
      {isPopOutActive && (
        <PopOutWindow onClose={closePopOut}>
          <iframe
            src={gameLink}
            title="Pop Out Slot Game"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </PopOutWindow>
      )}
    </div>
  );
}

export default GameArea;
