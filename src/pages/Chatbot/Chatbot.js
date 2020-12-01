import React from 'react';
import { Widget } from 'rasa-webchat';
import './style.css'
import logo from './logo.jpg'
import open from './open.jpg'

export default function ChatBot() {

    return (
        <Widget
            selector={"#webchat"}
            interval={1000}
            customData={{ "language": "pt-BR" }}
            socketUrl={"https:ngrok.io"}
            socketPath={"/socket.io/"}
            title={"Curvi"}
            subtitle={"Digite Oi para começarmos seu currículo"}
            inputTextFieldHint={"Sua mensagem..."}
            connectingText={"Conectando..."}
            hideWhenNotConnected={true}
            fullScreenMode={true}
            showFullScreenButton={true}
            profileAvatar={logo}
	    openLauncherImage={open}
            params={{
                images: {
                    dims: {
                        width: 250,
                        height: 200,
                    }
                },
                "storage": "session"
            }}
        />
    );
}
