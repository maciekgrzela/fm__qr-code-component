import React from 'react';
import qrCode from './assets/qr-code.png'
import './App.scss'

const App = () => {
    return (
        <div className="qr-code-container">
            <img className="qr-code-container__icon" src={qrCode} alt="qr-code" />
            <div className="qr-code-container__text qr-code-container-text">
                <h1 className="qr-code-container-text__header">Improve your front-end skills by building projects</h1>
                <p className="qr-code-container-text__description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
};

export default App;