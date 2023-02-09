import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../assets/avatar.svg";
import myImg from "../../assets/avatar2_ts.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeAbout = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={9} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>A brief introduction:</h1>

                        <p className="home-about-body">
                            With a passion for technology ignited during my undergraduate studies, I
                            have been continuously exploring the exciting world of computers and
                            programming. My main areas expertise lie in the cutting-edge fields of
                            <i>
                                <b className="orange"> artificial intelligence (AI)</b>
                            </i>
                            ,
                            <i>
                                <b className="orange"> machine learning </b>
                            </i>{" "}
                            and
                            <i>
                                <b className="orange"> deep learning </b>
                            </i>
                            technologies.
                            <br />
                            <br />I have honed my skills through numerous dynamic machine learning
                            projects on a variety of topics, including
                            <i>
                                <b className="orange"> biomedical signal processing</b>
                            </i>
                            ,
                            <i>
                                <b className="orange"> natural language processing</b>
                            </i>
                            ,
                            <i>
                                <b className="orange"> bio-informatics </b>
                            </i>
                            and beyond.
                            <br />
                            <br />
                            In addition to my AI pursuits, I am a skilled full-stack developer,
                            creating innovative
                            <i>
                                <b className="orange"> mobile applications </b>
                            </i>{" "}
                            and dynamic
                            <i>
                                <b className="orange"> websites </b>
                            </i>
                            that deliver outstanding user experiences. In fact, the very website you
                            are currently viewing is a testament to my dedication and technical
                            proficiency in web development!
                        </p>
                    </Col>
                    <Col md={3} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Please don't hestitate to connect!</h1>

                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="tel:+15149921787"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaPhoneAlt />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:nathanclairmonte@outlook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <MdEmail />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/nathanclairmonte"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/nathanclairmonte/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/njfc97"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HomeAbout;
