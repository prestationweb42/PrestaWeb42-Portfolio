import NavigationBar from "./Components/Navigation/NavigationBar";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "./Components/Particles";
import AboutMe from "./Components/AboutMe/AboutMe";
import Technologies from "./Components/Technologies/Technologies";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Header />
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "#212529",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            // onHover: {
                            //   enable: true,
                            //   mode: "repulse",
                            // },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffff5f",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                    },
                }}
            />
            <AboutMe />
            <Technologies />
        </div>
    );
}

export default App;
