import React from "react";
import {
  ButtonSubmitContainerStyled,
  EmailContainer,
  MessageContainer,
  PhoneContainer,
  StyledForm,
} from "./StyledForm";
import { NameContainer } from "./StyledForm";
import { ButtonStyled } from "../Button/StyledButton";
function Form() {
  return (
    <StyledForm>
      <h1>Formulario de contacto</h1>
      <NameContainer>
        <label htmlFor="Name">Tu nombre</label>
        <input type="text" name="" id="" placeholder="Nombre" />
        <input type="text" name="" id="" placeholder="Apellido" />
      </NameContainer>
      <EmailContainer>
        <label htmlFor="Name">Tu email</label>
        <input type="text" name="" id="" placeholder="Email" />
      </EmailContainer>
      <PhoneContainer>
        <label htmlFor="Name">Tu Telefono</label>
        <input type="text" name="" id="" placeholder="Numero de telefono" />
      </PhoneContainer>
      <MessageContainer>
        <label htmlFor="Name">Mensaje</label>
        <input type="text" name="" id="" placeholder="Tu mensaje" />
      </MessageContainer>
      <hr />
      <ButtonSubmitContainerStyled>
        <button>Enviar formulario</button>
      </ButtonSubmitContainerStyled>
    </StyledForm>
  );
}

export default Form;
