import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5001/register', {
                username: username,
                password: password
            });
            setMessage(response.data.message);
            // Очистить форму или перенаправить пользователя после регистрации
            setUsername('');
            setPassword('');
            // Перенаправление, если необходимо, можно добавить здесь:
            // window.location = '/login'; // или использовать history.push('/login') если у вас есть react-router
        } catch (error) {
            if (error.response) {
                // Запрос был сделан и сервер ответил с кодом состояния,
                // который выходит из диапазона статуса 2xx
                setMessage(error.response.data.message);
            } else {
                setMessage('Ошибка при регистрации.');
            }
        }
    };

    return (
        <div>
            <h2>Регистрация</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleRegister}>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterForm;
