// src/App.js

import './App.css';
import Navbar      from './components/Navbar/Navbar';
import Hero        from './components/Hero/Hero';
import SobreMi     from './components/SobreMi/SobreMi';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Proyectos   from './components/Proyectos/Proyectos';
import Contacto    from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;