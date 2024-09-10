import React from 'react';
import GameArea from '../components/GameArea';

function OldGunGame() {
  const gameLinkDesktop = "https://static-live.hacksawgaming.com/1568/1.14.2/index.html?language=en&channel=desktop&gameid=1568&mode=2&token=demo&currency=EUR&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-cu.hacksawgaming.com/api";
  const gameLinkMobile = "https://static-live.hacksawgaming.com/1568/1.14.2/index.html?language=en&channel=mobile&gameid=1568&mode=2&token=demo&currency=EUR&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-cu.hacksawgaming.com/api";

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <GameArea gameLink={isMobile ? gameLinkMobile : gameLinkDesktop} />
    </div>
  );
}

export default OldGunGame;