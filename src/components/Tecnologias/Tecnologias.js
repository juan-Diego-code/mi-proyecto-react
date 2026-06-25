// src/components/Tecnologias/Tecnologias.js

import './Tecnologias.css';

// Cada tecnología tiene nombre, ícono (emoji o imagen) y color
const techs = [
  { nombre: 'Python',     icono: '🐍', color: '#3776ab' },
  { nombre: 'HTML5',      icono: '🌐', color: '#e34f26' },
  { nombre: 'CSS3',       icono: '🎨', color: '#1572b6' },
  { nombre: 'JavaScript', icono: '⚡', color: '#f7df1e' },
  { nombre: 'Git',        icono: '🔀', color: '#f05032' },
  { nombre: 'GitHub',     icono: '🐙', color: '#ffffff' },
];

function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias">

      <h2 className="seccion-titulo">
        Tecnologías
      </h2>

      <div className="tech-grid">
        {/* .map() recorre el arreglo y crea una tarjeta por cada tecnología */}
        {techs.map((tech) => (
          <div key={tech.nombre} className="tech-card">
            <span className="tech-icono">{tech.icono}</span>
            <span className="tech-nombre">{tech.nombre}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Tecnologias;