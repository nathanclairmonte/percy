import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbCSharp } from "react-icons/tb";
import { FaReact, FaNode, FaAws, FaDocker } from "react-icons/fa";
import {
    //   DiJavascript1,
    //   DiReact,
    //   DiNodejs,
    //   DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiPandas,
    SiTensorflow,
    SiPytorch,
    SiKeras,
    SiNumpy,
    SiScipy,
    SiJavascript,
    SiTypescript,
    SiBootstrap,
    SiFlask,
    SiDotnet,
    SiGooglecloud,
} from "react-icons/si";

// const technologies = [
//     {
//         name: "Python",
//         icon: <DiPython className="tech-icon" />,
//     },
//     {
//         name: "Git",
//         icon: <DiGit className="tech-icon" />,
//     },
//     {
//         name: "Pandas",
//         icon: <SiPandas className="tech-icon" />,
//     },
//     {
//         name: "TensorFlow",
//         icon: <SiTensorflow className="tech-icon" />,
//     },
//     {
//         name: "PyTorch",
//         icon: <SiPytorch className="tech-icon" />,
//     },
//     {
//         name: "Keras",
//         icon: <SiKeras className="tech-icon" />,
//     },
//     {
//         name: "NumPy",
//         icon: <SiNumpy className="tech-icon" />,
//     },
//     {
//         name: "SciPy",
//         icon: <SiScipy className="tech-icon" />,
//     },
//     {
//         name: "SQL",
//         icon: <AiOutlineConsoleSql className="tech-icon" />,
//     },
//     {
//         name: "JavaScript",
//         icon: <SiJavascript className="tech-icon" />,
//     },
//     {
//         name: "TypeScript",
//         icon: <SiTypescript className="tech-icon" />,
//     },
//     {
//         name: "React",
//         icon: <FaReact className="tech-icon" />,
//     },
//     {
//         name: "React-Native",
//         icon: <FaReact className="tech-icon" />,
//     },
//     {
//         name: "Bootstrap",
//         icon: <SiBootstrap className="tech-icon" />,
//     },
//     {
//         name: "Node.js",
//         icon: <FaNode className="tech-icon" />,
//     },
//     {
//         name: "Flask",
//         icon: <SiFlask className="tech-icon" />,
//     },
//     {
//         name: ".NET Framework",
//         icon: <SiDotnet className="tech-icon" />,
//     },
//     {
//         name: "AWS",
//         icon: <FaAws className="tech-icon" />,
//     },
//     {
//         name: "Google Cloud Platform",
//         icon: <SiGooglecloud className="tech-icon" />,
//     },
//     {
//         name: "C#",
//         icon: <TbCSharp className="tech-icon" />,
//     },
//     {
//         name: "Docker",
//         icon: <FaDocker className="tech-icon" />,
//     },
// ];

const TechStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icon-container">
                <DiPython className="tech-icon" /> Python
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <DiGit className="tech-icon" /> Git
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiPandas className="tech-icon" /> Pandas
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiTensorflow className="tech-icon" /> TensorFlow
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiPytorch className="tech-icon" /> PyTorch
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiKeras className="tech-icon" /> Keras
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiNumpy className="tech-icon" /> NumPy
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiScipy className="tech-icon" /> SciPy
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <AiOutlineConsoleSql className="tech-icon" /> SQL
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiJavascript className="tech-icon" /> JavaScript
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiTypescript className="tech-icon" /> TypeScript
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <FaReact className="tech-icon" /> React
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <FaReact className="tech-icon" /> React-Native
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiBootstrap className="tech-icon" /> Bootstrap
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <FaNode className="tech-icon" /> Node.js
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiFlask className="tech-icon" /> Flask
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiDotnet className="tech-icon" /> .NET Framework
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <FaAws className="tech-icon" /> AWS
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <SiGooglecloud className="tech-icon" /> Google Cloud Platform
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <TbCSharp className="tech-icon" /> C#
            </Col>
            <Col xs={4} md={2} className="tech-icon-container">
                <FaDocker className="tech-icon" /> Docker
            </Col>
            {/* {technologies.map((tech) => (
                <Col xs={4} md={2} className="tech-icon-container">
                    {tech.icon} {tech.name}
                </Col>
            ))} */}
        </Row>
    );
};

export default TechStack;
