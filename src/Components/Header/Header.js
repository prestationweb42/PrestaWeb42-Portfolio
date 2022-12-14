import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";

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
                        .typeString("A software Engneer")
                        .pauseFor(2000)
                        .deleteAll();
                    typewriter
                        .typeString("Front-end Developer")
                        .pauseFor(2000)
                        .deleteAll()
                    typewriter
                        .typeString("Web Designer")
                        .pauseFor(2000)
                        .deleteAll()
                    typewriter
                        .typeString("SEO")
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
}

export default Header;
