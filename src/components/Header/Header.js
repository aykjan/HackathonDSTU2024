import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";


function Header() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/forms'); // Перенаправляет пользователя на страницу /forms
    };


    return (
        <header>
            <a href="/"><img  className="logo" src="./img/inverse-logo.webp" alt="logo" /></a>
            <button className="burger-menu" aria-label="Открыть меню">☰</button>
            <nav>
                <a href="#" className="nav__item">Элемент 1</a>
                <a href="#" className="nav__item">Элеyмент 2</a>
                <a href="#" className="nav__item">Элемент 3</a>
            </nav>
            <button onClick={handleLoginRedirect} className="logBtn white__btn btn btn-outline-warning">Вход / Регистрация</button>
        </header>
    );
}
export const btnI = document.querySelector('.logBtn');
export default Header;
