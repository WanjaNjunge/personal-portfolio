import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const fetchWebsitePreview = async (url) => {
  try {
    const response = await fetch("http://localhost:5000/website-preview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        websiteUrl: url,
      }),
    });

    const blobData = await response.blob();
    return URL.createObjectURL(blobData);
  } catch (error) {
    console.error(`Error fetching website preview for ${url}:`, error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [e2eProjectPreview, setE2EProjectPreview] = useState(null);
  const [websitePreview, setWebsitePreview] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [e2ePreview, webPreview] = await Promise.all([
          fetchWebsitePreview("https://demo.opencart.com/"), 
          fetchWebsitePreview("https://sunny-creponne-207bed.netlify.app/"),
        ]);

        setE2EProjectPreview(e2ePreview);
        setWebsitePreview(webPreview);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching website previews. Please try again.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const projects = [
    {
      title: "E2E Testing with Cypress",
      description: "Automation testing using Cypress on OpenCart's Storefront web app. Implementation of CI/CD workflow through integration with GitHub Actions",
      imgUrl: e2eProjectPreview || projImg1 ,
      link: "https://github.com/WanjaNjunge/opencart/"
    },
    {
      title: "Manual Testing Documentation",
      description: "Test plan, test cases and bug reporting for OpenCart's web app",
      imgUrl: projImg1,
      link: "https://drive.google.com/drive/folders/1-m_byNsic4szdxaKj3coYTr-fQReDHD5?usp=sharing"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a peak through into my technical skills, with reference to the range of tools and technologies I use in problem solving.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Quality Assurance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Articles</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row className="justify-content-center">
                      
                        <ProjectCard
                          title="Bank Website"
                          description="Fully responsive website with modern UI/UX in React JS with Tailwind"
                          imgUrl={websitePreview || projImg1} 
                          link="https://sunny-creponne-207bed.netlify.app/"  
                        />
                      
                      
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroungSS"></img>
    </section>
  )
}