import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import commNetworkImg from "../../assets/projectImages/comm-network2.png";
import udpImg from "../../assets/projectImages/udp-chat-system.png";
import icaImg from "../../assets/projectImages/sine-wave.png";
import natdleImg from "../../assets/projectImages/natdle.png";
import pacmanImg from "../../assets/projectImages/pacman.png";
import tfImg from "../../assets/projectImages/tf.jpg";
import siImg from "../../assets/projectImages/suicide-ideation.png";
import melodyImg from "../../assets/projectImages/melody-generation.png";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const myProjects = [
    {
        img: melodyImg,
        title: "Recurrent Neural Networks for Melody Generation",
        desc: `A project using RNNs made of LSTM units to generate melodies. Two melody 
        generation systems were implemented which learn on a set of training melodies to 
        generate novel melodies of their own. Gen-pitch learns solely on note pitch, 
        Gen-duration learns on both note pitch and duration. Melodies are in MIDI format. 
        Models were implemented using Keras.`,
        gitLink: "https://github.com/nathanclairmonte/melody-generation-RNN",
        webLink: null,
    },
    {
        img: pacmanImg,
        title: "PacMan Q-Learning Agent (Reinforcement Learning)",
        desc: `A project implementing Q-learning reinforcement learning techniques 
        to create an AI to play PacMan. Implemented using C++, Python and the Arcade Learning 
        Environment (ALE) package. All code for the agent is inside the agent.py file.`,
        gitLink: "https://github.com/nathanclairmonte/pacman-RL",
        webLink: null,
    },
    {
        img: tfImg,
        title: "Transcription Factor Binding Site Prediction",
        desc: `A project examining whether DNA structural/physical properties are 
        sufficient for a machine learning model to predict transcription factor binding sites. 
        Dataset was extracted from human genome data using Biopython and ML models were 
        implemented using Keras.`,
        gitLink: "https://github.com/nathanclairmonte/transcription-factor-binding-site-prediction",
        webLink: null,
    },
    {
        img: siImg,
        title: "Reducing Type II Errors in Suicide Ideation Detection",
        desc: `A project investigating the classification of online text based on the 
        presence of suicide ideation, specifically in the context of reducing the occurrence 
        of more detrimental Type II errors. Models were implemented using Scikit-Learn.`,
        gitLink: "https://github.com/nathanclairmonte/suicide-ideation-detection",
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
        img: natdleImg,
        title: 'Wordle Clone "Natdle"',
        desc: `A wordle clone application built using React-Native and Typescript.`,
        gitLink: "https://github.com/nathanclairmonte/natdle",
        webLink: null,
    },
    {
        img: commNetworkImg,
        title: "Optimal Communication Network Design",
        desc: `Python program which designs an optimal communication network connecting
        N cities given the costs of connecting the cities and the reliabilities of each
        connection.`,
        // The program can either meet a given reliability goal, meet a given
        // reliability goal subject to a given cost constraint, or maximize reliability
        // subject to a given cost constraint.`,
        gitLink: "https://github.com/nathanclairmonte/ECSE422-Project",
        webLink: null,
    },
    {
        img: icaImg,
        title: "FastICA Blind Source Separation",
        desc: `A project analysing the Fast Independent Components Analysis (FastICA) 
        algorithm and it's application to blind source separation.`,
        // The project involved
        // the generation of sinusoidal waves, storage of the waves, mixing of the waves,
        // and the application of blind source separation to them. In addition, the FastICA
        // approach was validated through comparisons with Fourier transforms of the original
        // and recovered signals.`,
        gitLink: "https://github.com/nathanclairmonte/ECSE444-Final-Project",
        webLink: null,
    },
];

const Projects = () => {
    return (
        <Container fluid className="projects-section">
            <Particle />
            <Container>
                <h1 className="projects-heading">My Projects</h1>
                <p className="projects-description">
                    Here is a (non-exhaustive) list of projects I've worked on throughout my career:
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {myProjects.map((project) => (
                        <Col md={3} className="projects-card">
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
