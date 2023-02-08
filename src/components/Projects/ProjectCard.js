import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ img, title, desc, gitLink, webLink }) => {
    return (
        <Card className="project-card-container">
            <Card.Img
                variant="top"
                src={img}
                alt="project-card-img"
                style={{
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    paddingTop: "15px",
                    // borderRadius: "5%",
                }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>{desc}</Card.Text>
                <Button variant="primary" href={gitLink} target="_blank">
                    <BsGithub /> GitHub
                </Button>
                {webLink ? (
                    <Button
                        variant="primary"
                        href={webLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> Website
                    </Button>
                ) : null}
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
