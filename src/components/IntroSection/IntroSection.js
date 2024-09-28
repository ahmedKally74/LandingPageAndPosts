import { Container, Row, Col } from "react-bootstrap";
import "./IntroSection.css";

const IntroSection = ({ introTitle, introDesc1, introDesc2 }) => {
  return (
    <Container className="content-container d-flex align-items-center">
      <Row className="w-100">
        <Col md={6} className="information-text">
          <h1>{introTitle}</h1>
          <p>{introDesc1}</p>
          <p>{introDesc2}</p>
          <div className="buttons-container">
            <button className="button-bg">Purchase UI Kit</button>
            <button className="button-trasparent">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroSection;