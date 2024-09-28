import { Row , Col } from "react-bootstrap";

const FooterHead = ({ copyRight, landingText }) => {
  return (
    <Row className="w-100">
      <Col className="text-left">
        <p className="copyRight">{copyRight}</p>
      </Col>
      <Col className="text-center landing-text-container">
        <h3>{landingText}</h3>
      </Col>
      <Col className="text-end">
        {" "}
        <button className="button-bg">Purchase Now</button>
      </Col>
    </Row>
  );
};

export default FooterHead;