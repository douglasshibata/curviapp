import React from 'react';
import '../App.css';
import logo from '../assets/logo.gif';
//import ChatBot from './Chatbot/Chatbot';
//import { Box } from './style';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo ao Curvi</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Você demora muito fazendo um currículo e não sabe o que colocar?</h2>
        <p>
          Converse agora mesmo com ele clicando no canto inferior da sua tela e faça seu currículo (rápido e fácil)!</p>
        {/* <ChatBot /> */}
        {/* <Box>
        <button><a  href='/resume'>Ver Currículo</a></button>
        </Box> */}
      </header>
    </div>
  );
}

export default LandingPage;
