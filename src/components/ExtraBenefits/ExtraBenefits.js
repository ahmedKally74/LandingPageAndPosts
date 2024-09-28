import { Container, Row, Col } from "react-bootstrap";
import "./ExtraBenefits.css";

const ExtraBenefits = ({
  benefitsTitle,
  benefitsDec1,
  benefitsDec2,
  imgSrc,
  haveButton,
}) => {
  return (
    <div className="benefits-section">
      <Container>
        <Row className="w-100">
          <Col className="extraBenefts-img-contain">
            <img width="480" src={imgSrc} />
          </Col>
          <Col className="benefits-section-text">
            <div className="extrabenefits-main-text">
              <h1>{benefitsTitle}</h1>
              <p>{benefitsDec1} </p>
              <p>{benefitsDec2}</p>
              {haveButton ? (
                <button className="button-bg mt-4">Purchase Now</button>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExtraBenefits;
