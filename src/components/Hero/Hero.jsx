import React from "react";
import {
  StyledHero,
  HeroTextContainerStyled,
  HeroImageContainer,
  ArrowContainer,
  AnimatedStyledHero,
} from "./HeroStyled";
import Button from "../Button/Button";

function Hero() {
  return (
    <>
      <StyledHero>
        <AnimatedStyledHero>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </AnimatedStyledHero>
        <HeroTextContainerStyled className="fadeInLeft">
          <button className="ui-btn">
            <span>WebDev</span>
          </button>
          <h1>Tu página web, a un click de distancia.</h1>

          <Button>Saber mas</Button>
        </HeroTextContainerStyled>
        <HeroImageContainer className="fadeIn">
          <img
            src="https://esdima.com/wp-content/uploads/2016/02/curso-webs-madrid.png"
            alt=""
          />
        </HeroImageContainer>
        <div className="rocket">
          <div className="rocket-body">
            <div className="body"></div>
            <div className="fin fin-left"></div>
            <div className="fin fin-right"></div>
            <div className="window"></div>
          </div>
          <div className="exhaust-flame"></div>
          <ul className="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="star">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </StyledHero>
      <ArrowContainer className="pulse">
        <i className="fa-solid fa-arrow-down"></i>
      </ArrowContainer>
    </>
  );
}

export default Hero;
