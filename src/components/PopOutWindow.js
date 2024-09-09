// src/components/PopOutWindow.js
import React, { useState, useRef, useEffect } from 'react';
import './PopOutWindow.css';

function PopOutWindow({ onClose, children }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 500, height: 350 });
  const windowRef = useRef(null);
  const draggingRef = useRef(false);
  const resizingRef = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // Función para iniciar el arrastre
  const startDrag = (e) => {
    draggingRef.current = true;
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  // Función para arrastrar la ventana
  const handleDrag = (e) => {
    if (draggingRef.current) {
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    }
  };

  // Finalizar el arrastre
  const stopDrag = () => {
    draggingRef.current = false;
  };

  // Función para iniciar el redimensionamiento
  const startResize = (e) => {
    resizingRef.current = true;
    offset.current = { x: e.clientX, y: e.clientY };
  };

  // Función para manejar el redimensionamiento
  const handleResize = (e) => {
    if (resizingRef.current) {
      const deltaX = e.clientX - offset.current.x;
      const deltaY = e.clientY - offset.current.y;
      setSize({ width: Math.max(300, size.width + deltaX), height: Math.max(200, size.height + deltaY) });
      offset.current = { x: e.clientX, y: e.clientY };
    }
  };

  // Finalizar el redimensionamiento
  const stopResize = () => {
    resizingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', stopResize);

    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <div
      className="pop-out-window"
      ref={windowRef}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="pop-out-header" onMouseDown={startDrag}>
        <span>Floating Game</span>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
      <div className="pop-out-content">
        {children} {/* Aquí el iframe ya debería llenar toda el área */}
      </div>
      <div className="resize-handle" onMouseDown={startResize}></div>
    </div>
  );
}

export default PopOutWindow;
