import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {
 
  
  const projects = [
    {
      title: "E2E Testing with Cypress",
      description: "Automation testing using Cypress on OpenCart's Storefront web app. Implementation of CI/CD workflow through integration with GitHub Actions",
      imgUrl: projImg2 ,
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
                          imgUrl={projImg3} 
                          link="https://sunny-creponne-207bed.netlify.app/"  
                        />
                      
                      
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row className="justify-content-center">
                      
                      <ProjectCard
                        title="A Tester on a Journey"
                        description="Heyya, fellow tech enthusiasts! 👋 I'm thrilled to welcome you to my corner of the internet, where I'll be sharing my experiences, insights, and ..."
                        imgUrl={projImg4} 
                        link="https://wanjanjunge.hashnode.dev/a-tester-on-a-journey"  
                      />
                    
                    
                  </Row>
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