import React from "react";
import DevIcon from "devicon-react-svg";
import { techs } from "../../Helpers/techs";
import "./Technologies.css";

const Technologies = () => {
    return (
        <section className="container-fluid" id="technologies">
            <div className="container ">
                <div className="row d-flex justify-content-evenly">
                    <h1>Mes Technologies</h1>
                    {techs.map((e, idx) => {
                        return (
                            <div className="tech__cards col-sm-4 col-lg-2">
                                <DevIcon icon={e.iconName} className="tech__icon" />
                                <p>{e.nom}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
