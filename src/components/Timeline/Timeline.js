// src/components/Timeline/Timeline.js

import { useState } from 'react';
import './Timeline.css';
import {
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaReact,
    FaDocker,
    FaDatabase,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTypescript, SiVercel } from 'react-icons/si';

// Mapa de nombre → ícono
const iconos = {
    HTML:       <FaHtml5 />,
    CSS:        <FaCss3Alt />,
    JavaScript: <FaJs />,
    Git:        <FaGitAlt />,
    React:      <FaReact />,
    Docker:     <FaDocker />,
    SQL:        <FaDatabase />,
    TypeScript: <SiTypescript />,
    Vercel:     <SiVercel />,
    Python:     <FaPython />,
  'Node.js':  <FaNodeJs />, // sin ícono por ahora
    'APIs REST': null,
};

const trayectoria = [
    {
    id: 1,
    año: '2024',
    titulo: 'El Comienzo',
    descripcion: 'Di mis primeros pasos en programación aprendiendo Python. Lógica, variables, funciones — la base de todo.',
    tecnologias: ['Python'],
    },
    {
    id: 2,
    año: '2025',
    titulo: 'El Mundo Web',
    descripcion: 'Entré al desarrollo web con HTML y CSS. Aprendí a construir y estilizar páginas desde cero.',
    tecnologias: ['HTML', 'CSS'],
    },
    {
    id: 3,
    año: '2026',
    titulo: 'Nuevos Horizontes',
    descripcion: 'Aprendí React construyendo este portafolio desde cero. Componentes, hooks, estado, despliegue en Vercel.',
    tecnologias: ['React', 'JavaScript', 'Vercel', 'Git'],
    },
    {
    id: 4,
    año: 'Ahora',
    titulo: 'Siguiendo Adelante',
    descripcion: 'Continuando mi camino, aprendiendo cada día y construyendo proyectos que me acercan más al mundo laboral.',
    tecnologias: ['SQL', 'Docker', 'TypeScript', 'Node.js'],
    },
];

function Timeline() {
    const [activo, setActivo] = useState(null);

    return (
    <section id="timeline" className="timeline">

        <h2 className="seccion-titulo">
        Mi <span>Camino</span>
        </h2>

        <div className="timeline-horizontal">

        <div className="timeline-linea"></div>

        {trayectoria.map((item) => (
            <div
            key={item.id}
            className="timeline-nodo"
            onMouseEnter={() => setActivo(item.id)}
            onMouseLeave={() => setActivo(null)}
            >
            <div className={`nodo-punto ${activo === item.id ? 'activo' : ''}`}></div>

            <span className="nodo-año">{item.año}</span>

            {activo === item.id && (
                <div className="nodo-card">
                <span className="timeline-año">{item.año}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>

                <div className="timeline-tags">
                    {item.tecnologias.map((tech) => (
                    <span key={tech} className="tag">
                      {/* Si existe el ícono lo muestra, si no solo el texto */}
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