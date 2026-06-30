// src/components/Tecnologias/Tecnologias.js

import "./Tecnologias.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiPython } from "react-icons/si";

const techs = [
  {
    nombre: "HTML5",
    icono: FaHtml5,
    color: "#E34F26",
  },
  {
    nombre: "CSS3",
    icono: FaCss3Alt,
    color: "#1572B6",
  },
  {
    nombre: "JavaScript",
    icono: FaJs,
    color: "#F7DF1E",
  },
  {
    nombre: "Python",
    icono: SiPython,
    color: "#3776AB",
  },
  {
    nombre: "Git",
    icono: FaGitAlt,
    color: "#F05032",
  },
  {
    nombre: "GitHub",
    icono: FaGithub,
    color: "#FFFFFF",
  },
];

function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias">
      <h2 className="seccion-titulo">Tecnologías</h2>

      <div className="tech-grid">
        {techs.map((tech) => {
          const Icon = tech.icono;

          return (
            <div key={tech.nombre} className="tech-card">
              <Icon
                className="tech-icono"
                style={{ color: tech.color }}
              />
              <span className="tech-nombre">{tech.nombre}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tecnologias;