import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import leBanditImage from '../assets/slots/lebandit.png'; // Importa la imagen de Le Bandit
import zeusvshadesImage from '../assets/slots/zeusvshades.png';
import wanteddeadorawildImage from '../assets/slots/wanteddeadorawild.png';
import thedoghouseImage from '../assets/slots/thedoghouse.png';
import taithetoadImage from '../assets/slots/taithetoad.png';
import sweetbonanzaImage from '../assets/slots/sweetbonanza.png';
import sugarrushImage from '../assets/slots/sugarrush.png';
import ripcityImage from '../assets/slots/ripcity.png';
import oldgunImage from '../assets/slots/oldgun.png';
import moneystacksImage from '../assets/slots/moneystacks.png';

// Importa imágenes de Prime's Originals
import kenoImage from '../assets/originals/keno.png';
import hiloImage from '../assets/originals/hilo.png';
import crashImage from '../assets/originals/crash.png';

// Live Casino images
import xxxtremelightningrouletteImage from '../assets/live-casino/xxxtremelightningroulette.png';
import sweetbonanzacandylandImage from '../assets/live-casino/sweetbonanzacandyland.png';
import stockmarketImage from '../assets/live-casino/stockmarket.png';
import reddoorrouletteImage from '../assets/live-casino/reddoorroulette.png';
import monopolybigballerImage from '../assets/live-casino/monopolybigballer.png';
import monopolyImage from '../assets/live-casino/monopoly.png';
import megaball100xImage from '../assets/live-casino/megaball100x.png';
import megarouletteImage from '../assets/live-casino/megaroulette.png';
import lightningstormImage from '../assets/live-casino/lightningstorm.png';
import lightningrouletteImage from '../assets/live-casino/lightningroulette.png';

function HomePage() {
  const navigate = useNavigate(); // Hook para la navegación

  const primesOriginals = [
    { name: 'Keno', image: kenoImage },
    { name: 'Hi-Lo', image: hiloImage },
    { name: 'Crash', image: crashImage },
  ];

  const slots = [
    { name: 'Le Bandit', image: leBanditImage, path: '/casino/games/le-bandit' },
    { name: 'Zeus vs Shades', image: zeusvshadesImage },
    { name: 'Wanted Dead or a Wild', image: wanteddeadorawildImage },
    { name: 'The Dog House', image: thedoghouseImage },
    { name: 'Tai the Toad', image: taithetoadImage },
    { name: 'Sweet Bonanza', image: sweetbonanzaImage },
    { name: 'Sugar Rush', image: sugarrushImage },
    { name: 'Rip City', image: ripcityImage },
    { name: 'Old Gun', image: oldgunImage },
    { name: 'Money Stacks', image: moneystacksImage },
  ];

  const liveCasino = [
    { image: xxxtremelightningrouletteImage },
    { image: sweetbonanzacandylandImage },
    { image: stockmarketImage },
    { image: reddoorrouletteImage },
    { image: monopolybigballerImage },
    { image: monopolyImage },
    { image: megaball100xImage },
    { image: megarouletteImage },
    { image: lightningstormImage },
    { image: lightningrouletteImage },
  ];

  // Función para redirigir a la ruta del juego
  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="homepage">
      {/* Sección de Prime's Originals */}
      <section className="section">
        <h2>Prime's Originals</h2>
        <div className="cards-container">
          {primesOriginals.map((original, index) => (
            <div key={index} className="card" onClick={() => navigate('/casino/originals')}>
              <img src={original.image} alt={original.name} className="slot-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Slots */}
      <section className="section">
        <h2>Slots</h2>
        <div className="cards-container">
          {slots.map((slot, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(slot.path)}>
              <img src={slot.image} alt={slot.name} className="slot-image" />
            </div>
          ))}
          <div className="card see-more" onClick={() => navigate('/casino/slots')}>
            See More
          </div>
        </div>
      </section>

      {/* Sección de Live Casino */}
      <section className="section">
        <h2>Live Casino</h2>
        <div className="cards-container">
          {liveCasino.map((game, index) => (
            <div key={index} className="card">
              <img src={game.image} alt={`Live Casino ${index + 1}`} className="slot-image" />
            </div>
          ))}
          <div className="card see-more" onClick={() => navigate('/casino/live-casino')}>
            See More
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
