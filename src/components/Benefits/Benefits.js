import { Container, Row, Col } from "react-bootstrap";
import SupBenefits from "./SupBenefits";
import icon from "../../assets/images/Icon.png";
import "./Benefits.css";

const Benefits = ({ benefitsTitle, benefitsDec1, benefitsDec2, imgSrc }) => {
  return (
    <div className="benefits-section">
      <Container>
        <Row className="w-100">
          <Col className="benefits-section-text">
            <div className="benefits-main-text">
              <h1>{benefitsTitle}</h1>
              <p>{benefitsDec1} </p>
              <p>{benefitsDec2}</p>
            </div>
            <Row className="w-100">
              <SupBenefits
                supBenefitsTitle="Title Goes Here"
                supBenefitsDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                supBenefitsIcon={icon}
              />
              <SupBenefits
                supBenefitsTitle="Title Goes Here"
                supBenefitsDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                supBenefitsIcon={icon}
              />
            </Row>
          </Col>
          <Col className="benefts-img-contain">
            <img width="540" src={imgSrc} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
