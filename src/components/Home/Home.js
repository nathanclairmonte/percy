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
// - Need to find a more suitable avatar or find a pic to replace it
// - split CSS into individual files for each component
// - Fix the social media icons in Home About, slightly off-centre
// - maybe change the icons throughout? especially for navbar. check react-icons
//   to see what they have
// - NavBar still giving some trouble. Issue is mainly with the flex direction of the
//   links and trying to make them switch from row to column based on the width of the
//   window. Want them to be column when the window is small and we have those three
//   lines basically. Will have to dig into the documentation for Nav.Toggle and figure
//   out how he made that three line span functionality work
// - Need to add projects to the projects page
