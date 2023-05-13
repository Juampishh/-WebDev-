import React from "react";
import {
  AboutStyled,
  BoxStyledContainer,
  ImgContainerAboutStyled,
  StyledAboutContainer,
  TextAboutStyled,
} from "./StyledAbout";

function About() {
  return (
    <StyledAboutContainer>
      <AboutStyled>
        <ImgContainerAboutStyled>
          <h1 className="h1-about">Que ofrecemos</h1>
          <img
            className="fadeIn"
            src="https://conectemos.com/wp-content/uploads/2022/04/servidor-web.png"
            alt=""
          />
        </ImgContainerAboutStyled>
        <TextAboutStyled>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-gauge-high"></i>
            </h1>
            <p>Tu pagina web en el menor tiempo posible</p>
          </BoxStyledContainer>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-sack-dollar"></i>
            </h1>
            <p>Precios accesibles</p>
          </BoxStyledContainer>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-arrow-trend-up"></i>
            </h1>
            <p>Incrementa tus ventas en un 100%</p>
          </BoxStyledContainer>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-user"></i>
            </h1>
            <p>Atencion personalizada las 24hs</p>
          </BoxStyledContainer>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-layer-group"></i>
            </h1>
            <p>Diseños modernos y funcionales</p>
          </BoxStyledContainer>
          <BoxStyledContainer>
            <h1>
              <i class="fa-solid fa-crop-simple"></i>
            </h1>
            <p>Diseño adaptable a cualquier dispositivo</p>
          </BoxStyledContainer>
        </TextAboutStyled>
      </AboutStyled>
    </StyledAboutContainer>
  );
}

export default About;
