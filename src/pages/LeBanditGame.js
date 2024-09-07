// src/pages/LeBanditGame.js
import React, { useEffect } from 'react';
import GameArea from '../components/GameArea';

function LeBanditGame() {
  // Este link se actualizará según sea dispositivo móvil o desktop.
  const gameLinkDesktop = "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=desktop&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";
  const gameLinkMobile = "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=mobile&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <GameArea gameLink={isMobile ? gameLinkMobile : gameLinkDesktop} />
    </div>
  );
}

export default LeBanditGame;
