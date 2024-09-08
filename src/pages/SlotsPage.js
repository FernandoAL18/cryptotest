import React from 'react';
import './SlotsPage.css';
import zeusvshadesImage from '../assets/slots/zeusvshades.png';
import wanteddeadorawildImage from '../assets/slots/wanteddeadorawild.png';
import thedoghouseImage from '../assets/slots/thedoghouse.png';
import taithetoadImage from '../assets/slots/taithetoad.png';
import sweetbonanzaImage from '../assets/slots/sweetbonanza.png';
import sugarrushImage from '../assets/slots/sugarrush.png';
import sweetbonanza1000Image from '../assets/slots/sweetbonanza1000.png';
import sixsixsixImage from '../assets/slots/sixsixsix.png';
import slayersincImage from '../assets/slots/slayersinc.png';
import sugarrush1000Image from '../assets/slots/sugarrush1000.png';
import ripcityImage from '../assets/slots/ripcity.png';
import oldgunImage from '../assets/slots/oldgun.png';
import lebanditImage from '../assets/slots/lebandit.png';
import moneystacksImage from '../assets/slots/moneystacks.png';
import gatesofolympus1000Image from '../assets/slots/gatesofolympus1000.png';
import handofanubisImage from '../assets/slots/handofanubis.png';
import gatesofolympusImage from '../assets/slots/gatesofolympus.png';
import fruitpartyImage from '../assets/slots/fruitparty.png';
import fistofdestructionImage from '../assets/slots/fistofdestruction.png';
import fireportalsImage from '../assets/slots/fireportals.png';
import dragonsdomainImage from '../assets/slots/dragonsdomain.png';
import donnydoughImage from '../assets/slots/donnydough.png';
import bowofartemisImage from '../assets/slots/bowofartemis.png';
import bigbasssplashImage from '../assets/slots/bigbasssplash.png';

function SlotsPage() {
  const slots = [
    { name: 'Zeus vs Shades', image: zeusvshadesImage },
    { name: 'Wanted Dead or a Wild', image: wanteddeadorawildImage },
    { name: 'The Dog House', image: thedoghouseImage },
    { name: 'Tai the Toad', image: taithetoadImage },
    { name: 'Sweet Bonanza', image: sweetbonanzaImage },
    { name: 'Sugar Rush', image: sugarrushImage },
    { name: 'Sweet Bonanza 1000', image: sweetbonanza1000Image },
    { name: 'Six Six Six', image: sixsixsixImage },
    { name: 'Slayers Inc.', image: slayersincImage },
    { name: 'Sugar Rush 1000', image: sugarrush1000Image },
    { name: 'Rip City', image: ripcityImage },
    { name: 'Old Gun', image: oldgunImage },
    { name: 'Le Bandit', image: lebanditImage },
    { name: 'Money Stacks', image: moneystacksImage },
    { name: 'Gates of Olympus 1000', image: gatesofolympus1000Image },
    { name: 'Hand of Anubis', image: handofanubisImage },
    { name: 'Gates of Olympus', image: gatesofolympusImage },
    { name: 'Fruit Party', image: fruitpartyImage },
    { name: 'Fist of Destruction', image: fistofdestructionImage },
    { name: 'Fire Portals', image: fireportalsImage },
    { name: 'Dragon’s Domain', image: dragonsdomainImage },
    { name: 'Donny Dough', image: donnydoughImage },
    { name: 'Bow of Artemis', image: bowofartemisImage },
    { name: 'Big Bass Splash', image: bigbasssplashImage },
  ];

  return (
    <div className="slots-page">
      <h2>All Slots</h2>
      <div className="cards-container">
        {slots.map((slot, index) => (
          <div key={index} className="card">
            <img src={slot.image} alt={slot.name} className="slot-image" />
            <span>{slot.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotsPage;
