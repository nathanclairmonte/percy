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

const technologies = [
    {
        name: "Python",
        icon: <DiPython className="tech-icon" />,
    },
    {
        name: "Git",
        icon: <DiGit className="tech-icon" />,
    },
    {
        name: "Pandas",
        icon: <SiPandas className="tech-icon" />,
    },
    {
        name: "TensorFlow",
        icon: <SiTensorflow className="tech-icon" />,
    },
    {
        name: "PyTorch",
        icon: <SiPytorch className="tech-icon" />,
    },
    {
        name: "Keras",
        icon: <SiKeras className="tech-icon" />,
    },
    {
        name: "NumPy",
        icon: <SiNumpy className="tech-icon" />,
    },
    {
        name: "SciPy",
        icon: <SiScipy className="tech-icon" />,
    },
    {
        name: "SQL",
        icon: <AiOutlineConsoleSql className="tech-icon" />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className="tech-icon" />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="tech-icon" />,
    },
    {
        name: "React",
        icon: <FaReact className="tech-icon" />,
    },
    {
        name: "React-Native",
        icon: <FaReact className="tech-icon" />,
    },
    {
        name: "Node.js",
        icon: <FaNode className="tech-icon" />,
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap className="tech-icon" />,
    },
    {
        name: "Flask",
        icon: <SiFlask className="tech-icon" />,
    },
    {
        name: ".NET Framework",
        icon: <SiDotnet className="tech-icon" />,
    },
    {
        name: "AWS",
        icon: <FaAws className="tech-icon" />,
    },
    {
        name: "Google Cloud Platform",
        icon: <SiGooglecloud className="tech-icon" />,
    },
    {
        name: "C#",
        icon: <TbCSharp className="tech-icon" />,
    },
    {
        name: "Docker",
        icon: <FaDocker className="tech-icon" />,
    },
];

const TechStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {technologies.map((tech) => (
                <Col xs={3} md={2} className="tech-icon-container">
                    {tech.icon} {tech.name}
                </Col>
            ))}
        </Row>
    );
};

export default TechStack;
