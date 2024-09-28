import { Col } from "react-bootstrap";
const SocialIcons = ({ socialLinks }) => {
  return (
    <Col className="text-end">
      <ul className="social-icons">
        {socialLinks.map((link, index) => (
          <li>
            <a key={index} href={link.link}>
              <img src={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </Col>
  );
};
export default SocialIcons;
