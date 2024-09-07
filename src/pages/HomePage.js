import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import leBanditImage from '../assets/slots/lebandit.png'; // Importa la imagen de Le Bandit

function HomePage() {
  const navigate = useNavigate(); // Hook para la navegación

  const promotions = [
    'Promocion 1',
    'Promocion 2',
    'Promocion 3',
  ];

  const primesOriginals = [
    'Shuffle Game 1',
    'Shuffle Game 2',
    'Shuffle Game 3',
    'Shuffle Game 4',
    'Shuffle Game 5',
    'Shuffle Game 6',
    'Shuffle Game 7',
    'Shuffle Game 8',
    'Shuffle Game 9',
    'Shuffle Game 10',
  ];

  const slots = [
    { name: 'Le Bandit', image: leBanditImage, path: '/casino/games/le-bandit' }, // Slot 1 con imagen y path
    { name: 'Slot 2' },
    { name: 'Slot 3' },
    { name: 'Slot 4' },
    { name: 'Slot 5' },
    { name: 'Slot 6' },
    { name: 'Slot 7' },
    { name: 'Slot 8' },
    { name: 'Slot 9' },
    { name: 'Slot 10' },
  ];

  const liveCasino = [
    'Roulette',
    'Blackjack',
    'Baccarat',
    'Game 4',
    'Game 5',
    'Game 6',
    'Game 7',
    'Game 8',
    'Game 9',
    'Game 10',
  ];

  const gameShows = [
    'Game Show 1',
    'Game Show 2',
    'Game Show 3',
    'Game Show 4',
    'Game Show 5',
    'Game Show 6',
    'Game Show 7',
    'Game Show 8',
    'Game Show 9',
    'Game Show 10',
  ];

  const latestReleases = [
    'Latest Release 1',
    'Latest Release 2',
    'Latest Release 3',
    'Latest Release 4',
    'Latest Release 5',
    'Latest Release 6',
    'Latest Release 7',
    'Latest Release 8',
    'Latest Release 9',
    'Latest Release 10',
  ];

  // Función para redirigir a la ruta del juego de Le Bandit
  const handleSlotClick = (slot) => {
    if (slot.path) {
      navigate(slot.path); // Redirige a la ruta del juego si tiene un path
    }
  };

  return (
    <div className="homepage">
      {/* Sección de Promociones */}
      <section className="promotions-section">
        <h2>Promotions</h2>
        <div className="cards-container">
          {promotions.map((promotion, index) => (
            <div key={index} className="card">{promotion}</div>
          ))}
        </div>
      </section>

      {/* Sección de Prime's Originals */}
      <section className="section">
        <h2>Prime's Originals</h2>
        <div className="cards-container">
          {primesOriginals.map((original, index) => (
            <div key={index} className="card">{original}</div>
          ))}
          <div className="card see-more">See More</div> {/* Tarjeta See More */}
        </div>
      </section>

      {/* Sección de Slots */}
      <section className="section">
        <h2>Slots</h2>
        <div className="cards-container">
          {slots.map((slot, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleSlotClick(slot)} // Accionar redirección al hacer clic
            >
              {slot.image ? (
                <img src={slot.image} alt={slot.name} className="slot-image" /> // Renderiza la imagen si está disponible
              ) : (
                slot.name // Si no hay imagen, muestra el nombre
              )}
            </div>
          ))}
          <div className="card see-more">See More</div> {/* Tarjeta See More */}
        </div>
      </section>

      {/* Sección de Live Casino */}
      <section className="section">
        <h2>Live Casino</h2>
        <div className="cards-container">
          {liveCasino.map((game, index) => (
            <div key={index} className="card">{game}</div>
          ))}
          <div className="card see-more">See More</div> {/* Tarjeta See More */}
        </div>
      </section>

      {/* Sección de Game Shows */}
      <section className="section">
        <h2>Game Shows</h2>
        <div className="cards-container">
          {gameShows.map((show, index) => (
            <div key={index} className="card">{show}</div>
          ))}
          <div className="card see-more">See More</div> {/* Tarjeta See More */}
        </div>
      </section>

      {/* Sección de Latest Releases */}
      <section className="section">
        <h2>Latest Releases</h2>
        <div className="cards-container">
          {latestReleases.map((release, index) => (
            <div key={index} className="card">{release}</div>
          ))}
          <div className="card see-more">See More</div> {/* Tarjeta See More */}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
