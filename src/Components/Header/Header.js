import React from "react";
import Typewriter from "typewriter-effect";
import "../Header/Header.css";

function Header() {
    return (
        <div className="typeWriter">
            <h1>Qui suis-je ?</h1>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello toto")
                        .pauseFor(1000)
                        .deleteAll();
                    typewriter
                        .typeString("Bonjour tout le monde")
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                }}
            />
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello toto")
                        .pauseFor(1000)
                        .deleteAll();
                    typewriter
                        .typeString("Bonjour tout le monde")
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
}

export default Header;
