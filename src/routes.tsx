import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './app';
import './main.scss';

const PokeRoutes: React.FC<any> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PokeRoutes;
