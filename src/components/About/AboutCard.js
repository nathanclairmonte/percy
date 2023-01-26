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
                    <p style={{ textAlign: "justify" }}>
                        Lorem
                        <br />
                        Things I am passionate about:
                    </p>
                    <ul>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Lorem
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Lorem
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Lorem
                        </li>
                        <li className="about-card-passions">
                            <BsCheckCircle className="passions-list-icon" /> Lorem
                        </li>
                    </ul>
                    <p className="about-card-quote">
                        "Lorem" (a quote lol)
                        <br />
                        Make sure to style about-card-quote class
                        <br />
                        Maybe make it italics?
                    </p>
                    <footer className="about-card-quote-person">— Quote Person</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;
