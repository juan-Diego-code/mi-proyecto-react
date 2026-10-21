// src/components/Proyectos/Proyectos.js

import './Proyectos.css';
import { useTranslation } from 'react-i18next';

const proyectos = [
  {
    id: 1,
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/juan-Diego-code/Pagina-JAC-Quinta-Oriental',
    demo: 'https://jac-quinta-oriental.web.app/',
  },
  {
    id: 2,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/juan-Diego-code/Blog-De-Los-Prisioneros',
    demo: 'https://juan-diego-code.github.io/Blog-De-Los-Prisioneros/',
  },
  {
    id: 3,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/juan-Diego-code/El-Camino-del-Anillo.git',
    demo: 'https://juan-diego-code.github.io/El-Camino-del-Anillo/',
  },
];

function Proyectos() {
  const { t } = useTranslation();
  const textos = t('proyectos.items', { returnObjects: true });

  return (
    <section id="proyectos" className="proyectos">

      <h2 className="seccion-titulo">
        {t('proyectos.titulo')} <span>{t('proyectos.tituloSpan')}</span>
      </h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={proyecto.id} className="proyecto-card">

            <div className="proyecto-card-top"></div>

            <div className="proyecto-card-body">
              <h3>{textos[index].titulo}</h3>
              <p>{textos[index].descripcion}</p>

              <div className="proyecto-tags">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="proyecto-links">
                <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn-primario">
                  GitHub
                </a>
                <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-secundario">
                  {t('proyectos.verDemo')}
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