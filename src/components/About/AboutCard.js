import React from "react";
import { Card } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

// IoIosArrowDroprightCircle
// IoIosArrowDropright
// IoArrowForwardCircle
// IoArrowForwardCircleOutline
// MdArrowRight
// BsCheckCircle

const AboutCard = () => {
    return (
        <Card className="about-card-container">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "left" }}>
                        Fueled by a passion for technology and a love for music and sports , I am a
                        multi-talented machine learning engineer and full-stack developer with a
                        wealth of experience and a proven track record of success. My expertise in
                        the field of machine learning and biomedical signal processing is
                        highlighted by my numerous published academic studies, demonstrating my
                        dedication to advancing the field and sharing my knowledge with others
                        <br />
                        <br />
                        In addition to my work in machine learing and AI, I have also honed my
                        skills as a full stack developer, bringing a wide range of mobile
                        applications and websites to life. With a focus on building robust, scalable
                        software that delivers real-world results, I am driven to make a positive
                        impact through my work.
                        <br />
                        <br />
                        Join me on my journey as I continue to combine my passion for technology
                        with my love for all things music and sports-related, always seeking out new
                        challenges and opportunities to grow.
                        <br />
                        <br />
                        <br />
                        Here are a few things I am passionate about:
                    </p>
                    <ul>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Machine learning/AI
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Web and app development
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Music: listening,
                            creating and playing it
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Sports, most
                            importantly football (soccer)
                        </li>
                    </ul>
                    {/* <p className="about-card-quote">
                        "Lorem" (a quote lol)
                        <br />
                        Make sure to style about-card-quote class
                        <br />
                        Maybe make it italics?
                    </p>
                    <footer className="about-card-quote-person">— Quote Person</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;
