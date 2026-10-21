// src/components/Hero/Hero.js

import './Hero.css';
import bannerImg from '../../assets/banner.png'; // <- Tu imagen
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();
    return (
    <section id="hero" className="hero">

      {/* Imagen de fondo tipo banner */}
        <div className="hero-banner">
        <img src={bannerImg} alt="Juan Diego - Desarrollador" />
        </div>

      {/* Botones encima del banner */}
        <div className="hero-botones">
        <a href="#proyectos" className="btn-primario">{t('hero.botonProyectos')}</a>
        <a href="https://github.com/juan-Diego-code" target="_blank" rel="noopener noreferrer" className="btn-secundario">{t('hero.botonGithub')}</a>
        </div>

    </section>
    );
}

export default Hero;