import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.js';
import Game from './components/TicTacToe/Game.js'

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="about" element={<About />} />
                <Route path="tictactoe" element={<Game />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

