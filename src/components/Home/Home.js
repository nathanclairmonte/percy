import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import TypewriterEffect from "./TypewriterEffect";
import homeLogo from "../../assets/home-main.svg";

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hey!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏾
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                My name is <strong className="main-name">Nathan Clairmonte</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TypewriterEffect />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default Home;
