// src/components/Navbar/Navbar.js

import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // <- Nuevo: controla el menú

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú cuando el usuario hace click en un link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <a href="#hero" className="navbar-logo">
        DC<span>.</span>
      </a>

      {/* Botón hamburguesa — solo visible en móvil */}
      {/* Al hacer click alterna entre true/false */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* La clase 'active' aparece cuando menuOpen es true */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#sobre-mi"    onClick={handleLinkClick}>Sobre mí</a></li>
        <li><a href="#tecnologias" onClick={handleLinkClick}>Tecnologías</a></li>
        <li><a href="#proyectos"   onClick={handleLinkClick}>Proyectos</a></li>
        <li><a href="#contacto"    onClick={handleLinkClick}>Contacto</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;