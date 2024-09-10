// src/context/PopOutContext.js
import React, { createContext, useState, useContext } from 'react';

const PopOutContext = createContext();

export const PopOutProvider = ({ children }) => {
  const [popOutContent, setPopOutContent] = useState(null); // Almacena el contenido del pop-out

  const openPopOut = (content) => {
    setPopOutContent(content); // Establecer el contenido del pop-out
  };

  const closePopOut = () => {
    setPopOutContent(null); // Cerrar el pop-out
  };

  return (
    <PopOutContext.Provider value={{ popOutContent, openPopOut, closePopOut }}>
      {children}
    </PopOutContext.Provider>
  );
};

export const usePopOut = () => useContext(PopOutContext);