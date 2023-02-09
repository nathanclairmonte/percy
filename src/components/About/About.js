import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import GitHubCalendar from "react-github-calendar";
// import aboutImg from "../../assets/about.png";
import aboutImg from "../../assets/man_at_desk_casual_ts.png";
import AboutCard from "./AboutCard";
import TechStack from "./TechStack";
import "./About.css";

const About = () => {
    let date = new Date();
    let year = date.getFullYear();

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
                <TechStack />

                <h1 className="about-heading">Github Commit History</h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <GitHubCalendar
                        username="nathanclairmonte"
                        year={year}
                        blockSize={15}
                        blockMargin={5}
                        color="#eb9722"
                        fontSize={16}
                    />
                </Row>
            </Container>
        </Container>
    );
};

export default About;
