import React from 'react';
import '../App.css';
import logo from '../assets/logo.gif';
import ChatBot from './Chatbot/Chatbot';
//import { Box } from './style';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem vindo o Curvi</p>
        <p>Converse agora mesmo com o Curvi</p>
        <ChatBot/>
        {/* <Box>
        <button><a  href='/resume'>Ver Currículo</a></button>
        </Box> */}
      </header>
    </div>
  );
}

export default LandingPage;
