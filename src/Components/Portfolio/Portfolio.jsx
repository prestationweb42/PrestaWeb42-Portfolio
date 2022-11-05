import React from "react";
import person from "../../images/person.png";
import "./Portfolio.css";
import portfolioData from "./portfolioData";

const Portfolio = () => {
    return (
        <section className="container-fluid" id="portfolio">
            <div className="container d-flex align-items-center">
                <div className="row">
                        <h1>Portfolio</h1>
                        <h1>Voici mon GitHub</h1>
                    <div className="cols col-lg-6">
                        <img src={person} alt="personne icone" />
                    </div>
                    <div className="cols col-lg-6">
                        <h1>About me</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolorum fugit maxime officiis repudiandae
                            inventore beatae vitae? Praesentium asperiores
                            quidem soluta dolores repellendus rem ullam ipsum
                            illo sequi ut facere veritatis mollitia molestias,
                            similique neque atque eaque? Odio, nostrum pariatur
                            laboriosam hic, debitis harum nihil eius quasi
                            accusamus itaque blanditiis, iusto repudiandae
                            expedita eveniet molestias. Quaerat libero voluptate
                            rerum fuga a. Odio, nostrum pariatur laboriosam hic,
                            debitis harum nihil eius quasi accusamus itaque
                            blanditiis, iusto repudiandae expedita eveniet
                            molestias. Quaerat libero voluptate rerum fuga a.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
