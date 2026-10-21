// src/components/Contacto/Contacto.js

import "./Contacto.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTranslation } from 'react-i18next';

function Contacto() {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="contacto">

      <h2 className="seccion-titulo">{t('contacto.titulo')}<span>{t('contacto.tituloSpan')}</span></h2>
      <p className="contacto-subtitulo">{t('contacto.subtitulo')}</p>

      <div className="contacto-links">

        <a href="mailto:juandcortesa11@gmail.com" className="contacto-card">
          <SiGmail className="contacto-icono gmail" />
          <span>juandcortesa11@gmail.com</span>
        </a>

        <a
          href="https://github.com/juan-Diego-code"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-card"
        >
          <FaGithub className="contacto-icono github" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/juanx_x112/"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-card"
        >
          <FaInstagram className="contacto-icono instagram" />
          <span>@juanx_x112</span>
        </a>

      </div>

      <footer className="footer">
        <p>© 2026 Juan Diego Cortés · {t('contacto.footer')} </p>
      </footer>

    </section>
  );
}

export default Contacto;