import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am skilled in both React and Rails for web development.<br></br> As a QA, I create comprehensive testing strategies, test automation scripts, and conduct API testing, ensuring software excellence. With proficiency in JavaScript, Cypress and Selenium, I am able to achieve high test automation coverage. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="progress" />
                                <h5>Test Automation</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="progress" />
                                <h5>Manual Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="progress" />
                                <h5>CI/CD</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="progress" />
                                <h5>API Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="progress" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="progress" />
                                <h5>Web Accessibility</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="progress" />
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="progress" />
                                <h5>Test Documentation</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background gradient" />
    </section>
  )
}