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
    //
    const handleClose = () => setModalShow(false);
    //
    function createModal(data) {
        return (
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        className="portfolio__modal__title"
                        id="contained-modal-title-vcenter"
                    >
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="portfolio__modal__summary">{data.summary}</p>
                    <p className="portfolio__modal__tech">{data.tech}</p>
                    <a
                        className="portfolio__modal__link d-flex flex-column"
                        href={data.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Cliquer sur le lien du site</span>
                        <Image src={data.image} />
                    </a>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="portfolio__modal__button"
                        onClick={handleClose}
                    >
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const showModal = portfolioData.map((e, idx) => {
        return (
            <Card key={idx} className="portfolio__card__container">
                <Image
                    className="portfolio__card__image"
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech,
                        });
                        setModalShow(true);
                    }}
                    src={e.image}
                />
                <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
                {/************ modal ************/}
                {createModal(tempData)}
            </Card>
        );
    });

    return (
        <section className="container-fluid" id="portfolio">
            <div className="container">
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
                <Container fluid="lg">
                    <Row>{showModal}</Row>
                </Container>
            </div>
        </section>
    );
};

export default Portfolio;
