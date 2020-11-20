import React from 'react';
import '../../App.css';
import logo from '../../assets/logo.gif';

function ErrorPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PÁGINA NÃO ENCONTRADA</h1>
        <a href='/'>Ir para Home</a>
      </header>
    </div>
  );
}

export default ErrorPage;
