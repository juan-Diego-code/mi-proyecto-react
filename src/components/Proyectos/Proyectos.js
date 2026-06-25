// src/components/Proyectos/Proyectos.js

import './Proyectos.css';

const proyectos = [
  {
    id: 1,
    titulo: 'Página JAC Quinta Oriental',
    descripcion: 'Sitio web oficial para la Junta de Acción Comunal Quinta Oriental. Información del barrio, noticias y contacto.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/juan-Diego-code/Pagina-JAC-Quinta-Oriental',
    demo: 'https://jac-quinta-oriental.web.app/',
  },
  {
    id: 2,
    titulo: 'Blog de Los Prisioneros',
    descripcion: 'Blog dedicado a la banda de rock en español "Los Prisioneros", creado por Juan Diego Cortés.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/juan-Diego-code/Blog-De-Los-Prisioneros',
    demo: 'https://juan-diego-code.github.io/Blog-De-Los-Prisioneros/',
  },
  {
    id: 3,
    titulo: 'Landing Page Viviendas y Valores',
    descripcion: 'Landing page profesional para empresa inmobiliaria. Presentación de propiedades y servicios.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/juan-Diego-code/Landing-Page-ViviendasyValores',
    demo: 'https://juan-diego-code.github.io/Landing-Page-ViviendasyValores/',
  },
];

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">

      <h2 className="seccion-titulo">
        Mis <span>Proyectos</span>
      </h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">

            <div className="proyecto-card-top"></div>

            <div className="proyecto-card-body">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>

              <div className="proyecto-tags">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="proyecto-links">
                <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn-primario">
                  Ver GitHub
                </a>
                <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-secundario">
                  Ver Pagina
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Proyectos;