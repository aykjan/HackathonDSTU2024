import React from 'react';
import './App.css';

import  Forms from "./components/forms/forms";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Main/forms/Register";
import RegisterForm from "./components/server/server";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="forms" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
