import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import TypewriterEffect from "./TypewriterEffect";
import homeLogo from "../../assets/home-main.svg";
import HomeAbout from "./HomeAbout";
import "./Home.css";

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
// - Particles not working. Why?
// - Need to find a more suitable avatar or find a pic to replace it
// - split CSS into individual files for each component
// - Fix the social media icons in Home About, slightly off-centre
// - remember to change footer-icons to footer-icons-list in css
// - remember to change social-icons to footer-icon in css
// - maybe change the icons throughout? especially for navbar. check react-icons
//   to see what they have
