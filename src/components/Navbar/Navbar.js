// src/components/Navbar/Navbar.js

import { useState, useEffect } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modoClaro, setModoClaro] = useState(false);

  const { t, i18n } = useTranslation();

  const cambiarIdioma = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const toggleModo = () => {
    setModoClaro(!modoClaro);
    document.body.classList.toggle('claro');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <a href="#hero" className="navbar-logo">
        DC<span>.</span>
      </a>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#sobre-mi"    onClick={handleLinkClick}>{t('navbar.sobreMi')}</a></li>
        <li><a href="#tecnologias" onClick={handleLinkClick}>{t('navbar.tecnologias')}</a></li>
        <li><a href="#timeline"    onClick={handleLinkClick}>{t('navbar.miCamino')}</a></li>
        <li><a href="#proyectos"   onClick={handleLinkClick}>{t('navbar.proyectos')}</a></li>
        <li><a href="#contacto"    onClick={handleLinkClick}>{t('navbar.contacto')}</a></li>
      </ul>

      <div className="navbar-botones">
         <button className="btn-modo" onClick={toggleModo} aria-label="Cambiar tema">
          {modoClaro ? '🌙' : '☀️'}
         </button>
        <button className="btn-idioma" onClick={cambiarIdioma}>
         {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;