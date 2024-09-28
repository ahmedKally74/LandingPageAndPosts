import FooterHead from "./FooterHead";
import { Container, Row, Nav, Col } from "react-bootstrap";
import FooterLinks from "./FooterLinks";
import facebook from "../../assets/images/social-icons/facebook.png";
import Instagram from "../../assets/images/social-icons/Instagram.png";
import linkdIn from "../../assets/images/social-icons/linkdIn.png";
import twitter from "../../assets/images/social-icons/twitter.png";
import yotube from "../../assets/images/social-icons/yotube.png";
import SocialIcons from "./SocialIcons";
import "./Footer.css";

const footerLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];
const socialLinks = [
  { icon: facebook, link: "#facebook" },
   { icon: linkdIn, link: "#linkdIn" },
     { icon: twitter, link: "#twitter" },
  { icon: Instagram, link: "#Instagram" },

  { icon: yotube, link: "#yotube" },
 
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="top-footer">
        <FooterHead copyRight="©2023 Yourcompany" landingText="Landing" />
      </Container>
      <Container className="pt-4">
        <Row className="w-100">
          <FooterLinks links={footerLinks} />
          <SocialIcons socialLinks={socialLinks} />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;