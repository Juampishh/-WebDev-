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
            className="fadeIn"
            src="https://conectemos.com/wp-content/uploads/2022/04/servidor-web.png"
            alt=""
          />
        </ImgContainerAboutStyled>
        <TextAboutStyled>
          <h1>¿Que ofrecemos?</h1>
          <p>
            Nuestro servicio de venta de páginas web es una inversión en tu
            negocio y en su presencia en línea. No solo te proporcionaremos un
            diseño profesional y atractivo, sino también una experiencia de
            usuario fácil de usar y una garantía de satisfacción del cliente del
            100%. Trabajar con nosotros es la elección correcta para llevar tu
            negocio al siguiente nivel en línea. ¡Contáctanos hoy mismo para
            obtener más información y comenzar a trabajar en tu nueva página
            web!
          </p>
        </TextAboutStyled>
      </AboutStyled>
    </StyledAboutContainer>
  );
}

export default About;
