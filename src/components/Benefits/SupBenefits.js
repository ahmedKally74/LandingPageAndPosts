import { Col } from "react-bootstrap";

const SupBenefits = ({
  supBenefitsIcon,
  supBenefitsTitle,
  supBenefitsDesc,
}) => {
  return (
    <Col>
      <div className="sup-content-contain">
        <img className="mb-3" src={supBenefitsIcon} />
        <h5>{supBenefitsTitle}</h5>
        <p>{supBenefitsDesc}</p>
      </div>
    </Col>
  );
};
export default SupBenefits;