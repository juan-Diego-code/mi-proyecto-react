// src/components/Hero/Hero.js

import './Hero.css';
import bannerImg from '../../assets/banner.png'; // <- Tu imagen

function Hero() {
    return (
    <section id="hero" className="hero">

      {/* Imagen de fondo tipo banner */}
        <div className="hero-banner">
        <img src={bannerImg} alt="Juan Diego - Desarrollador" />
        </div>

      {/* Botones encima del banner */}
        <div className="hero-botones">
        <a
            href="#proyectos"
            className="btn-primario"
        >
            Ver proyectos
        </a>
        <a
            href="https://github.com/juan-Diego-code"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundario"
        >
            GitHub
        </a>
        </div>

    </section>
    );
}

export default Hero;