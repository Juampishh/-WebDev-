import React from "react";
import {
  AboutStyled,
  ImgContainerAboutStyled,
  StyledAboutContainer,
  TextAboutStyled,
} from "./StyledAbout";

function About() {
  return (
    <StyledAboutContainer>
      <AboutStyled>
        <ImgContainerAboutStyled>
          <img
            src="https://conectemos.com/wp-content/uploads/2022/04/servidor-web.png"
            alt=""
          />
        </ImgContainerAboutStyled>
        <TextAboutStyled>
          <h1>¿Quienes somos?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            deleniti vero molestias, ab aspernatur unde incidunt labore
            similique accusamus optio, expedita nisi sunt corrupti possimus in
            ad illo ullam sapiente?
          </p>
        </TextAboutStyled>
      </AboutStyled>
    </StyledAboutContainer>
  );
}

export default About;
