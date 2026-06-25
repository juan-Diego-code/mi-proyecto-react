import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es mi primer proyecto en React, estoy aprendiendo a usarlo y me parece muy interesante.
        </p>
        <a
          className="App-link"
          href="https://github.com/juan-Diego-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
