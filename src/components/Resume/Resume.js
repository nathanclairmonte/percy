import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle/Particle";
import resume from "../../assets/Nathan-Clairmonte-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={resume}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    <AiOutlineDownload /> &nbsp;Download CV
                </Button>
            </Row>

            <Row className="resume-document">
                <Document file={resume} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={resume}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    <AiOutlineDownload /> &nbsp;Download CV
                </Button>
            </Row>
        </Container>
    );
};

export default Resume;
