// src/components/SobreMi/SobreMi.js

import './SobreMi.css';
import { useTranslation } from 'react-i18next';

function SobreMi() {
  const { t } = useTranslation();
  return (
    <section id="sobre-mi" className="sobre-mi">

      <h2 className="seccion-titulo">{t('sobreMi.titulo')} <span>{t('sobreMi.tituloSpan')}</span></h2>

      <div className="sobre-mi-contenido">

        {/* Texto izquierda */}
        <div className="sobre-mi-texto">
        <p>{t('sobreMi.p1')}</p>
        <p>{t('sobreMi.p2')}</p>
        <p className="frase-destacada">{t('sobreMi.frase')} <span>{t('sobreMi.fraseSpan')}</span>.</p>
        </div>

        {/* Datos rápidos derecha */}
        <div className="sobre-mi-datos">
        <span className="dato-label">{t('sobreMi.tecnologias')}</span>
        <span className="dato-label">{t('sobreMi.proyectos')}</span>
        <span className="dato-label">{t('sobreMi.compromiso')}</span>
        </div>

      </div>
    </section>
  );
}

export default SobreMi;