// src/pages/TaiTheToadGame.js
import React from 'react';
import GameArea from '../components/GameArea';

function TaiTheToadGame() {
  const gameLinkDesktop = "https://static-live.hacksawgaming.com/1478/1.18.0/index.html?language=en&channel=desktop&gameid=1478&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";
  const gameLinkMobile = "https://static-live.hacksawgaming.com/1478/1.18.0/index.html?language=en&channel=mobile&gameid=1478&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <GameArea gameLink={isMobile ? gameLinkMobile : gameLinkDesktop} />
    </div>
  );
}

export default TaiTheToadGame;