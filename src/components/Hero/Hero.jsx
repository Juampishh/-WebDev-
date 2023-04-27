import React from "react";
import {
  StyledHero,
  HeroTextContainerStyled,
  HeroImageContainer,
} from "./HeroStyled";
import Button from "../Button/Button";

function Hero() {
  return (
    <StyledHero>
      <HeroTextContainerStyled>
        <h1>Tu página web, a un clic de distancia.</h1>
        <h2>Potencia tu presencia online con nuestra ayuda</h2>
        <Button>Saber mas</Button>
      </HeroTextContainerStyled>
      <HeroImageContainer></HeroImageContainer>
    </StyledHero>
  );
}

export default Hero;
