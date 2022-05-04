import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav.js';
import About from './components/About.js';
import Game from './components/TicTacToe/Game'

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="tictactoe" element={<Game />} />
        </Routes>
    </BrowserRouter>
);

