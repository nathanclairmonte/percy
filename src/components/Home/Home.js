import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import TypewriterEffect from "./TypewriterEffect";
import homeLogo from "../../assets/home-main.svg";
import HomeAbout from "./HomeAbout";

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
            <HomeAbout />
        </section>
    );
};

export default Home;
//TODO
// - HomeAbout styling isn't working for some reason. Dig into that
// - Similarly, HomeAbout layout is fucked too. Figure out why
// - Tilt functionality on the HomeAbout avatar also not working. Why?
// - Particles not working. Why?
// - Need to find a more suitable avatar or find a pic to replace it
