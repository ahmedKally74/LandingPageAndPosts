import {  Nav , Col } from "react-bootstrap";

const FooterLinks = ({ links }) => {
  return (
    <Col>
      <Nav className="ml-auto nav-contain">
        {links.map((link, index) => (
          <Nav.Link key={index} href={link.link}>
            {link.name}
          </Nav.Link>
        ))}
      </Nav>
    </Col>
  );
};
export default FooterLinks;