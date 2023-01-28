import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
import "./Resume.css";

const resumeDownload =
    "https://drive.google.com/uc?export=download&id=1qpJv9xU2JQRM2CBkt9y0Zwjjyxck3Knf";

const Resume = () => {
    return (
        <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={resumeDownload}
                    style={{ maxWidth: "250px", marginBottom: "20px" }}
                >
                    <AiOutlineDownload /> &nbsp;Download CV
                </Button>
            </Row>

            <Row className="resume-document">
                <Card sx={{ maxWidth: 824 }}>
                    <CardMedia
                        className="cardmedia"
                        component="iframe"
                        height="1056px"
                        src="https://drive.google.com/file/d/1qpJv9xU2JQRM2CBkt9y0Zwjjyxck3Knf/preview"
                    />
                </Card>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={resumeDownload}
                    style={{ maxWidth: "250px", marginBottom: "20px" }}
                >
                    <AiOutlineDownload /> &nbsp;Download CV
                </Button>
            </Row>
        </Container>
    );
};

export default Resume;
