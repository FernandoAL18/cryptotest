// src/pages/MoneyStacksGame.js
import React from 'react';
import GameArea from '../components/GameArea';

function MoneyStacksGame() {
  const gameLinkDesktop = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20bblitz&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";
  const gameLinkMobile = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20bblitz&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <GameArea gameLink={isMobile ? gameLinkMobile : gameLinkDesktop} />
    </div>
  );
}

export default MoneyStacksGame;