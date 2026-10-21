// src/components/Timeline/Timeline.js

import { useState } from 'react';
import './Timeline.css';
import {
  FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaReact, FaDocker, FaDatabase, FaNodeJs,
} from 'react-icons/fa';
import { SiTypescript, SiVercel } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const iconos = {
  Python:      <FaPython />,
  HTML:        <FaHtml5 />,
  CSS:         <FaCss3Alt />,
  JavaScript:  <FaJs />,
  Git:         <FaGitAlt />,
  React:       <FaReact />,
  Docker:      <FaDocker />,
  SQL:         <FaDatabase />,
  TypeScript:  <SiTypescript />,
  Vercel:      <SiVercel />,
  'Node.js':   <FaNodeJs />,
  'APIs REST': null,
};

const trayectoria = [
  { id: 1, tecnologias: ['Python'] },
  { id: 2, tecnologias: ['HTML', 'CSS'] },
  { id: 3, tecnologias: ['React', 'JavaScript', 'Vercel', 'Git'] },
  { id: 4, tecnologias: ['SQL', 'Docker', 'TypeScript', 'Node.js'] },
];

function Timeline() {
  const [activo, setActivo] = useState(null);
  const { t } = useTranslation();
  const textos = t('timeline.hitos', { returnObjects: true });

  const esTactil = () => window.matchMedia('(hover: none)').matches;

  const handleClick = (id) => {
    if (!esTactil()) return;
    setActivo(activo === id ? null : id);
  };

  const handleMouseEnter = (id) => {
    if (esTactil()) return;
    setActivo(id);
  };

  const handleMouseLeave = () => {
    if (esTactil()) return;
    setActivo(null);
  };

  return (
    <section id="timeline" className="timeline">

      <h2 className="seccion-titulo">
        {t('timeline.titulo')} <span>{t('timeline.tituloSpan')}</span>
      </h2>

      <p className="timeline-ayuda">{t('timeline.ayuda')}</p>

      <div className="timeline-horizontal">

        <div className="timeline-linea"></div>

        {trayectoria.map((item, index) => (
          <div
            key={item.id}
            className="timeline-nodo"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.id)}
          >
            <div className={`nodo-punto ${activo === item.id ? 'activo' : ''}`}></div>

            <span className="nodo-año">{textos[index].año}</span>

            {activo === item.id && (
              <div className="nodo-card">
                <span className="timeline-año">{textos[index].año}</span>
                <h3>{textos[index].titulo}</h3>
                <p>{textos[index].descripcion}</p>
                <div className="timeline-tags">
                  {item.tecnologias.map((tech) => (
                    <span key={tech} className="tag">
                      {iconos[tech] && (
                        <span className="tag-icono">{iconos[tech]}</span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Timeline;