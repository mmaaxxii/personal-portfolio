import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'

export function Projects() {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        Lorem hgfhgf ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" defaultActiveKey="/home">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <TabPane eventKey="second">Loren Ipsum</TabPane>
                                            <TabPane eventKey="third">Loren Ipsum</TabPane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}



