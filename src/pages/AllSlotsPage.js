import React from 'react';
import './AllSlotsPage.css';
import sweetBonanzaImage from '../assets/slots/sweetbonanza.png';
import slayersIncImage from '../assets/slots/slayersinc.png';
import gatesOfOlympusImage from '../assets/slots/gatesofolympus.png';
import zeZeusImage from '../assets/slots/zezeus.png';
import sugarRushImage from '../assets/slots/sugarrush.png';
import wantedDeadOrAWildImage from '../assets/slots/wanteddeadorawild.png';
import sixSixSixImage from '../assets/slots/sixsixsix.png';
import bennyTheBeerImage from '../assets/slots/bennythebeer.png';
import bigBassBonanzaImage from '../assets/slots/bigbassbonanza.png';
import dorkUnitImage from '../assets/slots/dorkunit.png';
import bookOfDeadImage from '../assets/slots/bookofdead.png';
import donnyDoughImage from '../assets/slots/donnydough.png';
import leBanditImage from '../assets/slots/lebandit.png';

const slotsData = [
  { id: 1, name: 'Sweet Bonanza 1000', provider: 'Pragmatic Play', image: sweetBonanzaImage },
  { id: 2, name: 'Slayers Inc', provider: 'Hacksaw', image: slayersIncImage },
  { id: 3, name: 'Gates of Olympus 1000', provider: 'Pragmatic Play', image: gatesOfOlympusImage },
  { id: 4, name: 'Ze Zeus', provider: 'Hacksaw', image: zeZeusImage },
  { id: 5, name: 'Sugar Rush 1000', provider: 'Pragmatic Play', image: sugarRushImage },
  { id: 6, name: 'Wanted Dead or a Wild', provider: 'Hacksaw', image: wantedDeadOrAWildImage },
  { id: 7, name: 'SixSixSix', provider: 'Hacksaw', image: sixSixSixImage },
  { id: 8, name: 'Benny the Beer', provider: 'Hacksaw', image: bennyTheBeerImage },
  { id: 9, name: 'Big Bass Bonanza', provider: 'Pragmatic Play', image: bigBassBonanzaImage },
  { id: 10, name: 'Dork Unit', provider: 'Hacksaw', image: dorkUnitImage },
  { id: 11, name: 'Rich Wilde Book of Dead', provider: 'Play\'n Go', image: bookOfDeadImage },
  { id: 12, name: 'Donny Dough', provider: 'Hacksaw', image: donnyDoughImage },
  { id: 13, name: 'Le Bandit', provider: 'Hacksaw', image: leBanditImage }
];

const AllSlotsPage = () => {
  return (
    <div className="all-slots-page">
      <header className="slots-header">
        <button className="back-button">&lt; Slots</button>
        <h1>Slots</h1>
        <div className="filters">
          <input type="text" placeholder="Search" className="search-bar" />
          <select className="filter">
            <option value="all-providers">All Providers</option>
            <option value="pragmatic-play">Pragmatic Play</option>
            <option value="hacksaw">Hacksaw</option>
            <option value="playngo">Play'n Go</option>
          </select>
          <select className="sort">
            <option value="featured">Sort by: Featured</option>
            <option value="alphabetical">Sort by: Alphabetical</option>
            <option value="popularity">Sort by: Popularity</option>
          </select>
        </div>
      </header>

      <div className="slots-grid">
        {slotsData.map(slot => (
          <div key={slot.id} className="slot-card">
            <img src={slot.image} alt={slot.name} className="slot-image" />
            <div className="slot-info">
              <span className="provider">{slot.provider}</span>
              <h2 className="slot-name">{slot.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSlotsPage;
