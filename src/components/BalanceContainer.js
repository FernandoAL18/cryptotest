import React, { useState, useEffect } from 'react';
import './BalanceContainer.css';
import walletIcon from '../assets/wallet.svg';
import downArrow from '../assets/down-arrow.svg';
import usdtIcon from '../assets/usdt.svg';
import btcIcon from '../assets/btc-icon.svg';
import ethIcon from '../assets/eth-icon.svg';
import xrpIcon from '../assets/xrp-icon.svg';

function BalanceContainer() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [prices, setPrices] = useState({});
  const [selectedCrypto, setSelectedCrypto] = useState({
    icon: usdtIcon,
    symbol: 'USDT',
    balance: 0.0, // Balance inicial en cero
  });

  // Lista de criptomonedas con balances iniciales en cero
  const cryptos = [
    { symbol: 'BTC', icon: btcIcon, balance: 0.0 },
    { symbol: 'ETH', icon: ethIcon, balance: 0.0 },
    { symbol: 'USDT', icon: usdtIcon, balance: 0.0 },
    { symbol: 'XRP', icon: xrpIcon, balance: 0.0 },
  ];

  // Función para obtener los precios de las criptomonedas desde la API de CoinGecko
  const fetchPrices = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,xrp&vs_currencies=usd'
      );
      const data = await response.json();
      console.log("Prices fetched from API: ", data); // Mostrar los precios obtenidos
      setPrices({
        BTC: data.bitcoin.usd,
        ETH: data.ethereum.usd,
        USDT: data.tether.usd,
        XRP: data.xrp.usd,
      });
    } catch (error) {
      console.error('Error al obtener los precios de las criptomonedas:', error);
    }
  };

  // Ejecutar la función fetchPrices cuando se monta el componente
  useEffect(() => {
    fetchPrices();
  }, []);

  // Alternar el estado del dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Convertir el balance de criptomonedas a dólares (USD)
  const convertToFiat = (crypto) => {
    const price = prices[crypto.symbol];
    console.log(`Converting ${crypto.symbol} balance to fiat. Price: ${price}, Balance: ${crypto.balance}`);
    
    if (price && typeof crypto.balance === 'number') {
      return (crypto.balance * price).toFixed(2); // Retorna el balance convertido a dólares
    }
    return '0.00'; // Si no hay precio o el balance no es un número, retorna 0
  };

  return (
    <div className="balance-container">
      <div className="balance-info" onClick={toggleDropdown}>
        <img src={selectedCrypto.icon} alt={selectedCrypto.symbol} className="crypto-icon" />
        <span>
          ${convertToFiat(selectedCrypto)} {/* Siempre mostrar el balance en dólares */}
        </span>
        <img src={downArrow} alt="Toggle Dropdown" className="arrow-icon" />
      </div>
      <button className="wallet-btn">
        <img src={walletIcon} alt="Wallet Icon" />
        Wallet
      </button>

      {isDropdownOpen && (
        <div className="crypto-dropdown">
          <input type="text" placeholder="Search" className="search-input" />
          <ul className="crypto-list">
            {cryptos.map((crypto) => (
              <li
                key={crypto.symbol}
                onClick={() => {
                  setSelectedCrypto(crypto); // Actualiza la cripto seleccionada
                  setDropdownOpen(false); // Cierra el dropdown
                }}
              >
                <div className="left-section">
                  <img src={crypto.icon} alt={crypto.symbol} className="crypto-icon" />
                  <span>{crypto.symbol}</span>
                </div>
                <div className="right-section">
                  <span>
                    ${convertToFiat(crypto)} {/* Mostrar siempre el balance en dólares */}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BalanceContainer;
