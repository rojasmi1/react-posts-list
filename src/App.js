import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home';

// En al App vamos a montar el componente <Home /> que es un contenedor,
// dicho componente tiene el estado de la aplicación y lo actualiza según sea necesario
// al cargar datos del Rest API

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React blog</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
