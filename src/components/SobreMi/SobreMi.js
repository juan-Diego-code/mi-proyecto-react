// src/components/SobreMi/SobreMi.js

import './SobreMi.css';

function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">

      <h2 className="seccion-titulo">
        Sobre <span>mí</span>
      </h2>

      <div className="sobre-mi-contenido">

        {/* Texto izquierda */}
        <div className="sobre-mi-texto">
          <p>
            Hola, soy <strong>Juan Diego</strong>, estudiante de Desarrollo de Software
            apasionado por crear soluciones web modernas y funcionales.
          </p>
          <p>
            Actualmente estoy aprendiendo React, construyendo proyectos reales
            y mejorando cada día. Creo que el código bien escrito es una forma de arte.
          </p>
          <p className="frase-destacada">
            "Aprendiendo hoy, construyendo el <span>futuro</span>."
          </p>
        </div>

        {/* Datos rápidos derecha */}
        <div className="sobre-mi-datos">
          <div className="dato">
            <span className="dato-numero">+5</span>
            <span className="dato-label">Tecnologías</span>
          </div>
          <div className="dato">
            <span className="dato-numero">+5</span>
            <span className="dato-label">Proyectos</span>
          </div>
          <div className="dato">
            <span className="dato-numero">100%</span>
            <span className="dato-label">Compromiso</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SobreMi;