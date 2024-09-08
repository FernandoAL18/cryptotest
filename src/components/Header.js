import React, { useEffect, useState } from 'react';
import './Header.css';
import logoDesktop from '../assets/logo.png'; // Logo para pantallas grandes
import logoMobile from '../assets/logo-mobile.png'; // Logo para pantallas pequeñas
import BalanceContainer from './BalanceContainer'; // Importar el BalanceContainer

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Determina si es móvil basado en el ancho de la pantalla
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar inicialmente para establecer el estado correcto

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="app-header">
      <img src={isMobile ? logoMobile : logoDesktop} alt="Logo" className="logo" /> {/* Logo dinámico */}
      
      <div className="header-center"> {/* Centrar BalanceContainer */}
        <BalanceContainer />
      </div>
    </header>
  );
}

export default Header;
