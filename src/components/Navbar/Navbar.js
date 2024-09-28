import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./Navbar.css";

const Header = (props) => {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
    { name: "Posts", link: "/posts" },
  ];

  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Row className="w-100">
            <Col className="text-content">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav-contain">
                  {navLinks.map((navItem, index) => (
                    <Nav.Link key={index} href={navItem.link}>
                      {navItem.name}
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col className="text-center landing-text-container">
              <h3>{props.landingText}</h3>
            </Col>
            <Col className="text-end landing-button-container">
              <button className="button-bg">{props.buttonText}</button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;