import { Container, Row, Nav, Col } from "react-bootstrap";
import "./PriceSection.css";

const PriceSection = ({
  priceTitle,
  priceDesc,
  priceValue,
  productName,
  additionalDescription,
}) => {
  return (
    <div className="price-container text-center">
      <Container>
        <Row className="w-100">
          <Col>
            <h1>{priceTitle}</h1>
            <p>{priceDesc}</p>
            <div className="price-number">
              <h2>{priceValue}</h2>
              <p>{productName}</p>
            </div>
            <p className="pb-0">{additionalDescription}</p>
            <button className="button-bg">Purchase Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PriceSection;