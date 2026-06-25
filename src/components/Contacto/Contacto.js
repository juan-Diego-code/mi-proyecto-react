// src/components/Contacto/Contacto.js

import './Contacto.css';

function Contacto() {
  return (
    <section id="contacto" className="contacto">

      <h2 className="seccion-titulo">
        Contacto
      </h2>

      <p className="contacto-subtitulo">
        ¿Tienes un proyecto o quieres conectar? Escríbeme.
      </p>

      <div className="contacto-links">

        <a href="mailto:juandcortesa11@gmail.com" className="contacto-card">
          <span>📧</span>
          <span>juandcortesa11@gmail.com</span>
        </a>

        <a
          href="https://github.com/juan-Diego-code"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-card"
        >
          <span>🐙</span>
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/juanx_x112/"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-card"
        >
          <span>📸</span>
          <span>@juanx_x112</span>
        </a>

      </div>

      <footer className="footer">
        <p>© 2026 Juan Diego Cortés · Hecho con React 💻</p>
      </footer>

    </section>
  );
}

export default Contacto;