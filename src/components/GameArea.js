import React, { useState } from 'react';
import './GameArea.css';
import expandIcon from '../assets/icons/game-container/expand.svg';
import popOutIcon from '../assets/icons/game-container/pop-out.svg';
import theatreModeIcon from '../assets/icons/game-container/theatre-mode.svg';
import statsIcon from '../assets/icons/game-container/stats.svg';
import favouriteIcon from '../assets/icons/game-container/favourite.svg';
import logo from '../assets/icons/game-container/logo.png';
import PopOutWindow from './PopOutWindow'; 
import { usePopOut } from '../context/PopOutContext'; // Import PopOutContext

function GameArea({ gameLink }) {
  const [isGameStarted, setGameStarted] = useState(false);
  const { isPopOutActive, openPopOut, closePopOut } = usePopOut(); // Use PopOutContext

  const startDemoGame = () => {
    setGameStarted(true);
  };

  const handlePopOut = () => {
    openPopOut(
      <iframe
        src={gameLink}
        title="Pop Out Slot Game"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    );
  };

  return (
    <div>
      {/* Game area */}
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
          // Display message if pop-out is active
          <div className="pop-out-active-message">
            <h2>Pop Out Active</h2>
            <p>Close the pop-out window to continue playing here.</p>
          </div>
        ) : (
          // Show game if pop-out is not active
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

      {/* Game options container */}
      <div className="game-options-container">
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

        {/* Logo in the center */}
        <div className="center-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Real and Fun toggle buttons */}
        <div className="game-toggle">
          <button className="game-option-btn">Real</button>
          <button className="game-option-btn">Fun</button>
        </div>
      </div>

      {/* Pop-out window */}
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