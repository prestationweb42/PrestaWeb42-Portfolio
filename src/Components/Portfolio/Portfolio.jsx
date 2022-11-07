import React, { useState } from "react";
import portfolioData from "./portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});

    const showModal = portfolioData.map((e, idx) => {
        return (
            <Card key={idx}>
                <Image
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            desc: e.desc,
                            summary: e.summary,
                            tech: e.tech,
                        });
                        setModalShow(true);
                    }}
                    src={e.image}
                />
            </Card>
        );
    });

    return (
        <section className="container-fluid" id="portfolio">
            <div className="container d-flex align-items-center">
                <div className="row">
                    <h1>Portfolio</h1>
                    <h2>
                        Voici mon GitHub&nbsp;:&nbsp;
                        <a
                            href="https://github.com/prestationweb42"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/prestationweb42
                        </a>
                    </h2>
                    {/* <Container fluid="lg"> */}
                    <Container fluid="lg">
                        <Row>{showModal}</Row>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
