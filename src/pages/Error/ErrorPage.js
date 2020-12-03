import React from 'react';
import '../../App.css';
import logo from '../../assets/logo.gif';

function ErrorPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DESCULPE</h1>
        <h2>PÁGINA NÃO ENCONTRADA</h2>
        <a href='/'>Ir para Home</a>
        <p>Para mais informações ou dúvidas mande um email para <a href='mailto:curvistartup@gmail.com'>curvistartup@gmail.com</a></p>
        {/* <p>Redes Sociais @curvistartup</p> */}
      </header>
    </div>
  );
}

export default ErrorPage;
