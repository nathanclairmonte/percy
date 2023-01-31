import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import chatifyImg from "../../assets/projectImages/chatify.png";
import commNetworkImg from "../../assets/projectImages/comm-network2.png";
import udpImg from "../../assets/projectImages/udp-chat-system.png";
import icaImg from "../../assets/projectImages/sine-wave.png";
import natdleImg from "../../assets/projectImages/natdle.png";
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
    {
        img: commNetworkImg,
        title: "Optimal Communication Network Design",
        desc: `Python program which designs an optimal communication network connecting
        N cities given the costs of connecting the cities and the reliabilities of each
        connection. The program can either meet a given reliability goal, meet a given
        reliability goal subject to a given cost constraint, or maximize reliability
        subject to a given cost constraint.`,
        gitLink: "https://github.com/nathanclairmonte/ECSE422-Project",
        webLink: null,
    },
    {
        img: udpImg,
        title: "P2P UDP Chat System",
        desc: `Peer to peer chat system that performs NAT traversal using UDP punchthrough
        techniques. Implemented using Node.js and React.`,
        gitLink: "https://github.com/nathanclairmonte/P2P-UDP-Chat-System",
        webLink: null,
    },
    {
        img: icaImg,
        title: "FastICA Blind Source Separation",
        desc: `A project analysing the Fast Independent Components Analysis (FastICA) 
        algorithm and it's application to blind source separation. The project involved 
        the generation of sinusoidal waves, storage of the waves, mixing of the waves, 
        and the application of blind source separation to them. In addition, the FastICA 
        approach was validated through comparisons with Fourier transforms of the original 
        and recovered signals.`,
        gitLink: "https://github.com/nathanclairmonte/ECSE444-Final-Project",
        webLink: null,
    },
    {
        img: natdleImg,
        title: 'Wordle Clone "Natdle"',
        desc: `A wordle clone application built using React-Native and Typescript.`,
        gitLink: "https://github.com/nathanclairmonte/natdle",
        webLink: null,
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
