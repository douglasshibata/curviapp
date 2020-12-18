import React from 'react';
import '../App.css';
import logo from '../assets/bot.jpg';
import ChatBot from './Chatbot/Chatbot';
//import { Box } from './style';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Você demora muito fazendo seu currículo ou não sabe como fazê-lo?</h2>
        <p>
        Converse comigo clicando no canto inferior da sua tela e faça seu currículo de forma rápida e fácil!</p>
        <ChatBot />
        {/* <Box>
        <button><a  href='/resume'>Ver Currículo</a></button>
        </Box> */}
      </header>
    </div>
  );
}

export default LandingPage;
