import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import benefitsImg from "../assets/images/undraw_mobile_login_ikmv.png";
import happyNews from "../assets/images/undraw_happy_news_hxmt.png";
import social from "../assets/images/undraw_social_influencer_sgsv.png";
import mention from "../assets/images/undraw_mention_6k5d.png";
import Header from "./Navbar/Navbar";
import IntroSection from "./IntroSection/IntroSection";
import Benefits from "./Benefits/Benefits";
import ExtraBenefits from "./ExtraBenefits/ExtraBenefits";
import PriceSection from "./PriceSection/PriceSection";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro-section">
        <Header landingText={"Landing"} buttonText={"Buy Now"} />
        <IntroSection
          introTitle="Introduce Your Product Quickly & Effectively"
          introDesc1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
          introDesc2="mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        />
      </div>
      <Benefits
        benefitsTitle="Light, Fast & Powerful"
        benefitsDec1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
        benefitsDec2="mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        imgSrc={benefitsImg}
        imgInLeft={false}
        hasSupBenefits={true}
      />

      <ExtraBenefits
        benefitsTitle="Light, Fast & Powerful"
        benefitsDec1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
        benefitsDec2="mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        imgSrc={happyNews}
        haveButton={false}
      />
      <ExtraBenefits
        benefitsTitle="Light, Fast & Powerful"
        benefitsDec1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
        benefitsDec2="mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        imgSrc={social}
        haveButton={false}
      />
      <ExtraBenefits
        benefitsTitle="Light, Fast & Powerful"
        benefitsDec1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
        benefitsDec2="mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        imgSrc={mention}
        haveButton={true}
      />

      <PriceSection
        priceTitle="A Price To Suit Everyone"
        priceDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
        priceValue="$40"
        productName="UI Design Kit"
        additionalDescription="See, One price. Simple."
      />
      <Footer />
    </div>
  );
};

export default LandingPage;