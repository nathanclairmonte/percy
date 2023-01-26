import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import chatifyImg from "../../assets/projectImages/chatify.png";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const myProjects = [
    {
        img: chatifyImg,
        title: "Temp",
        desc: `Personal Chat Room or Workspace to share resources and hangout 
        with friends build with react.js, Material-UI, and Firebase. Have features 
        which allows user for realtime messaging, image sharing as well as supports 
        reactions on messages.`,
        gitLink: "https://github.com/nathanclairmonte/",
        webLink: "https://chatify-49.web.app/",
    },
];

const Projects = () => {
    return (
        <Container fluid className="projects-section">
            <Particle />
            <Container>
                <h1 className="projects-heading">My Recent Works</h1>
                <p className="projects-description">
                    Here are a few projects I've worked on throughout my career
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Javascript to map an object to a bunch of project cards */}
                    {myProjects.map((project) => (
                        <Col md={4} className="projects-card">
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                gitLink={project.gitLink}
                                webLink={project.webLink ? project.webLink : null}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
