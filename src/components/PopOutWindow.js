// src/components/PopOutWindow.js
import React, { useState, useRef, useEffect } from 'react';
import './PopOutWindow.css';
import { usePopOut } from '../context/PopOutContext'; // Import PopOutContext

function PopOutWindow() {
  const { popOutContent, closePopOut } = usePopOut(); // Obtenemos el contenido del PopOutContext
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 500, height: 350 });
  const windowRef = useRef(null);
  const draggingRef = useRef(false);
  const resizingRef = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const startDrag = (e) => {
    draggingRef.current = true;
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleDrag = (e) => {
    if (draggingRef.current) {
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    }
  };

  const stopDrag = () => {
    draggingRef.current = false;
  };

  const startResize = (e) => {
    resizingRef.current = true;
    offset.current = { x: e.clientX, y: e.clientY };
  };

  const handleResize = (e) => {
    if (resizingRef.current) {
      const deltaX = e.clientX - offset.current.x;
      const deltaY = e.clientY - offset.current.y;
      setSize({
        width: Math.max(300, size.width + deltaX),
        height: Math.max(200, size.height + deltaY),
      });
      offset.current = { x: e.clientX, y: e.clientY };
    }
  };

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
  }, [position, size]);

  if (!popOutContent) return null; // No mostrar nada si no hay contenido

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
        <button onClick={closePopOut} className="close-btn">
          X
        </button>
      </div>
      <div className="pop-out-content">
        {popOutContent} {/* Renderizamos el contenido del pop-out */}
      </div>
      <div className="resize-handle" onMouseDown={startResize}></div>
    </div>
  );
}

export default PopOutWindow;