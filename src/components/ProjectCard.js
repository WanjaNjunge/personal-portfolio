import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Card"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="view-more-button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View More
              </a>
            </div>
        </div>
      </div>
      </a>
    </Col>
  )
}