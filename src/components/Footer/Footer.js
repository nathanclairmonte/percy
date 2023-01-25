import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    const iconSize = "1.5em";

    return (
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-copyright">
                    <h3>Designed and developed by Nathan Clairmonte</h3>
                </Col>
                <Col md={4} className="footer-copyright">
                    <h3>Copyright © {year} NC</h3>
                </Col>
                <Col md={4} className="footer-body">
                    <ul className="footer-icons-list">
                        <li className="social-icons">
                            <a
                                href="https://github.com/nathanclairmonte/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub style={{ fontSize: iconSize }} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/nathanclairmonte/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn style={{ fontSize: iconSize }} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/njfc97"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram style={{ fontSize: iconSize }} />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
