import React from 'react';
import '../App.css';
import logo from '../assets/logo.gif';
import ChatBot from './Chatbot/Chatbot';
import { Box } from './style';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem vindo a Curvi</p>
        <p>Converse agora mesmo com o Curvi</p>
        <p>Clicando na caixinha azul no canto inferior da tela</p>
        <p>ou</p>
        <p>Clique no botão e veja o seu Currículo</p>
        <ChatBot/>
        <Box>
        <button><a  href='/resume'>Ver Currículo</a></button>
        </Box>
      </header>
    </div>
  );
}

export default LandingPage;
