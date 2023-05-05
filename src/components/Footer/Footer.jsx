import React from "react";
import {
  StyledFooterContainer,
  StyledListContainer,
  StyledOtherContainer,
  StyledPhoneContainer,
  StyledSocialContainer,
} from "./StyledFooter";

function Footer(props) {
  return (
    <StyledFooterContainer>
      <StyledListContainer>
        <ul>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
          <li>Redes Sociales</li>
        </ul>
      </StyledListContainer>
      <StyledSocialContainer>
        <ul>
          <li>
            <i class="fa-brands fa-instagram"></i> Instagram
          </li>
          <li>
            <i class="fa-brands fa-facebook"></i> Facebook
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i> Twitter
          </li>
        </ul>
      </StyledSocialContainer>
      <StyledOtherContainer>
        <ul>
          <li>
            <i class="fa-brands fa-linkedin"></i> Linkedin
          </li>
          <li>
            <i class="fa-brands fa-github"></i> GitHub
          </li>
          <li>
            <i class="fa-brands fa-paypal"></i> PayPal
          </li>
        </ul>
      </StyledOtherContainer>
      <StyledPhoneContainer>
        <ul>
          <li>
            <i class="fa-solid fa-phone"></i> +54-3777-382757
          </li>
        </ul>
      </StyledPhoneContainer>
    </StyledFooterContainer>
  );
}

export default Footer;
