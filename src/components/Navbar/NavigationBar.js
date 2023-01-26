import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import {
    AiFillGithub,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import "./NavigationBar.css";

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [navColour, setNavColour] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    const iconMargin = "5px";

    return (
        <Navbar
            expanded={expanded}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navbar-expand-md" defaultActiveKey="#home">
                        <Nav.Item
                            style={{
                                display: "flex",
                                flexDirection: expanded ? "column" : "row",
                            }}
                        >
                            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: iconMargin }} /> Home
                            </Nav.Link>

                            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                                <AiOutlineUser style={{ marginBottom: iconMargin }} /> About
                            </Nav.Link>

                            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: iconMargin }}
                                />{" "}
                                Projects
                            </Nav.Link>

                            <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
                                <CgFileDocument style={{ marginBottom: iconMargin }} /> Resume
                            </Nav.Link>

                            <Nav.Link
                                href="https://github.com/nathanclairmonte/"
                                onClick={() => setExpanded(false)}
                                target="_blank"
                            >
                                <AiFillGithub style={{ marginBottom: iconMargin }} /> Github
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
