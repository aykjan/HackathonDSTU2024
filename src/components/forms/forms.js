import React, { useState } from 'react';
import './Forms.css'; // Импорт CSS стилей

function Forms() {
    const [showResults, setShowResults] = useState(false);

    return (
        <>
            <RegistrationAndQuizForm setShowResults={setShowResults} />
            {showResults && <QuizResults />}
        </>
    );
}

function RegistrationAndQuizForm({ setShowResults }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        question1: '',
        question2: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration and Quiz Data: ', formData);
        setShowResults(true);
    };

    return (
        <container>
            <form onSubmit={handleSubmit} className="quiz-form">
                <div className="question-bubble">
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="question-bubble">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div><span className="img1"></span>
                <div className="question-bubble">
                    <label>Пароль</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="question-bubble">
                    <label>Ваш возраст</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div><span className="img2"></span>
                <div className="question-bubble">
                    <label>Ваш пол</label>
                    {/*<input type="text" name="gender" value={formData.gender} onChange={handleChange} required />*/}
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
                <div className="question-bubble">
                    <label>Ваши увлечения</label>
                    <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} required />
                </div>
                <div className="question-bubble">
                    <label>Любимый напиток</label>
                    <input type="text" name="drink" value={formData.drink} onChange={handleChange} required />
                </div><span className="img3"></span>
                <div className="question-bubble">
                    <label>Расскажите о себе</label>
                    <input type="text" name="aboutMe" value={formData.aboutMe} onChange={handleChange} required />
                </div>
                <div className="question-bubble">
                    <label>Ваше фото ( не обязательно )</label>
                    <input type="file" name="photo" value={formData.photo} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Register and Submit Quiz</button>
            </form>
        </container>
    );
}

function QuizResults() {
    return <div>Quiz Results Here</div>;
}

export default Forms;
