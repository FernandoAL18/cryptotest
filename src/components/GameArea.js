// src/components/GameArea.js
import React, { useState, useEffect } from 'react';
import './GameArea.css';

function GameArea({ gameLink }) {
  const [isGameStarted, setGameStarted] = useState(false);

  const startDemoGame = () => {
    setGameStarted(true);
  };

  return (
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
      ) : (
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
  );
}

export default GameArea;
