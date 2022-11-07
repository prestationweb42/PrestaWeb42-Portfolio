import React from "react";
import person from "../../images/person.png";
import { navLinks } from "../../Helpers/navLinks";
import "./ContactMe.css";

const Contact = () => {
    function createLinks() {
        return navLinks.map((e, idx) => (
            <p key={idx}>
                <a href={e.ref}>{e.nom}</a>
            </p>
        ));
    }

    return (
        <section className="container-fluid bg-dark text-white" id="contact">
            <div className="container">
                <div className="row">
                    <div className="cols col-lg-6">
                        <img src={person} alt="personne icone" />
                        <p>Somewhere - Lyon</p>
                        <p>tel : 00 01 02 03 04</p>
                        <p>prestationweb42@gmail.com</p>
                    </div>
                    <div className="cols col-lg-6">
                        <h1>Contact</h1>
                        {createLinks()}
                    </div>
                </div>
            </div>
            <div className="container contact__copyright">
                <p>
                    Copyright &copy; {new Date().getFullYear()} - Tous droits
                    réservés
                </p>
                {/* <!-- Grid container --> */}
                <div className="text-center p-3 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <div className="mb-4 contact__social__media">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-outline-light btn-floating mx-2"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
