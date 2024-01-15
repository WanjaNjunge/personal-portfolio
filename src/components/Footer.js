import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-end">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}className="text-center text-sm-start mb-3">
            <img src={logo} alt="Logo" className="footer-logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mb-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/stephanie-njung-e-41146a168/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/WanjaNjunge" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://wanjanjunge.hashnode.dev/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={6}>
          <p className="text-center text-sm-start">All rights reserved.© Wanja Njung'e 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}