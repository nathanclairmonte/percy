import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import aboutImg from "../../assets/about.png";
import "./About.css";
import AboutCard from "./AboutCard";
import TechStack from "./TechStack";

const About = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>Title</h1>
                        {/* AboutCard */}
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={aboutImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="about-heading">Professional Skillset</h1>
                {/* TechStack */}
                <TechStack />

                {/* <h1 className="about-heading">Tools I Use</h1> */}
                {/* ToolStack */}
                {/* Github component */}
            </Container>
        </Container>
    );
};

export default About;
