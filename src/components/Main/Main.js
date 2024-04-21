import React from 'react';

function Main() {
    return (
        <main>
            <section className="short__descr">
                <div className="container">
                    <img className="short__descr--bouncing-element" src="./img/oggetto-logo.png" alt="Logo"/>
                    <h1 className="main__title">The PHP Framework <br/><span>for Web Artisans</span></h1>
                    <p className="text__descr">Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.</p>
                    <div className="descr__buttons">
                        <button className="red__btn btn btn-outline-danger">Get</button>
                        <button className="white__btn btn btn-outline-warning mobile_showing">Вход / регистрация</button>
                    </div>
                </div>
            </section>

            <section className="benefits">
                <div className="container">
                    <img className="benefits--bouncing-element1" src="./img/oggetto-logo.png" alt="Additional Logo"/>
                    <div className="left__content">
                        <h2 className="left__content-title">Write code for the joy of it.</h2>
                        <p className="left__content-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consectetur justo. Maecenas bibendum vitae elit eu faucibus. Aliquam ipsum risus, congue eget gravida in, tempus sit amet vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consectetur justo. Maecenas bibendum vitae elit eu faucibus. Aliquam ipsum risus, congue eget gravida in, tempus sit amet vivamus.</p>
                        <button className="left__content-btn btn btn-outline-danger">Start learning</button>
                    </div>
                    <div className="right__content">
                        <img src="./img/image.png" alt="code" className="right__content-img"/>
                        <img className="benefits--bouncing-element2" src="./img/oggetto-logo.png" alt="Logo Variation"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
