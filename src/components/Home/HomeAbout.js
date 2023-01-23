import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomeAbout = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Let me <span className="orange"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I fell in love with computers and programming during my undergrad and
                            have been learning about them ever since.
                            <br />
                            <br />
                            My main areas of interest are
                            <i>
                                <b className="orange"> AI, machine learning and deep learning </b>
                            </i>
                            technologies.
                            <br />
                            Specifically, I have worked on machine learning projects for
                            <i>
                                <b className="orange">
                                    {" "}
                                    biomedical signal processing, natural language processing,
                                    computer vision{" "}
                                </b>
                            </i>
                            and more...
                            <br />
                            Additionally, I enjoy
                            <i>
                                <b className="orange"> web and app development </b>
                            </i>
                            , having built multiple applications and the website you're viewing
                            right now!
                            <br />
                            <br />I am fluent in popular languages such as
                            <i>
                                <b className="orange">
                                    {" "}
                                    Python, Javascript, Typescript and MATLAB script{" "}
                                </b>
                            </i>
                            , and have prior experience with many more.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>You can find me on:</h1>

                        <ul className="home-about-social-links">
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
                            {/* <li className="social-icons">
                                <a
                                    href="https://twitter.com/Soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li> */}
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
