import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todos_app from "../../Assets/Projects/todos_app.png";
import youtube_clone from "../../Assets/Projects/youtube_clone.png";
import netflix_clone from "../../Assets/Projects/netflix_clone.png";
import swiggy_clone from "../../Assets/Projects/swiggy_clone.png";
import countries_search from "../../Assets/Projects/countries_search.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix_clone}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix GPT also features robust authentication and authorization capabilities utilizing Firebase. Netflix GPT uses React & Redux for smooth browsing & Axios for real-time updates, ensuring seamless user experience. 
              anyone can create an account or login by using given email and password. email: testing@gmail.com and password: Test.123"        
              ghLink="https://github.com/iam-santhosh777/NetflixGPT"
              demoLink="https://myflix-ed777.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube_clone}
              title="Youtube Clone"
              description="Created a clone of youtube using React.js, Real YouTube V3 APIs were employed to fetch data including videos, comments, and channel information. Implemented a search input box with a debouncing delay of 250ms for improved user experience"
              ghLink="https://github.com/iam-santhosh777/MyTube"
              demoLink="https://iam-santhosh777.github.io/MyTube/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy_clone}
              isBlog={false}
              title="Swiggy Clone"
              description="I developed a Swiggy clone application, leveraging a custom bundler, namely Parcel. I integrated live API data sourced directly from the official Swiggy website. Additionally, I incorporated Redux for efficient state management, specifically handling the cart and its items. Throughout development, I prioritized modularity and maintainability, ensuring scalability and ease of future enhancements."
              ghLink="https://github.com/iam-santhosh777/Swiggy-Clone"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todos_app}
              isBlog={false}
              title="Todo List"
              description="I implemented CRUD (Create, Read, Update, Delete) operations for a todo list using JavaScript event listeners, dynamically updating the UI through DOM manipulation. To manage todo items, I utilized Arrays, Objects, and their associated methods. Furthermore, I ensured the persistence of the todo list state across page reloads by employing local storage methods."
              ghLink=""
              demoLink="http://santhosh2do.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countries_search}
              isBlog={false}
              title="Countries Search"
              description="I asynchronously retrieved a list of countries from the server using a fetch GET HTTP API call. To ensure responsiveness, I utilized Bootstrap's grid system and CSS box model. Additionally, I implemented a local search functionality using an input element, JavaScript event listeners, and filtered the countries using the Array filter method. The technologies employed in this project include HTML, CSS, JavaScript, REST API Calls, and Bootstrap"
              ghLink=""
              demoLink="https://santhoshcountry.ccbp.tech/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
