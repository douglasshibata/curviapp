import React from 'react';
import logo from '../assets/logo.gif';
import '../App.css';
function LandingPage() {

  return (
    <div className="App">
      <header className="App-header-1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem vindo a Curvi</p>
      </header>
    </div>
  );
}

export default LandingPage;