// eslint-disable-next-line no-unused-vars
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
				<label htmlFor="Name">Nombre</label>
				<input type="text" name="" id="" placeholder="Juan Pablo Merino" />
			</NameContainer>
			<EmailContainer>
				<label htmlFor="Name">Tu email</label>
				<input type="text" name="" id="" placeholder="Unejemplo@gmail.com" />
			</EmailContainer>
			<PhoneContainer>
				<label htmlFor="Name">Tu Telefono</label>
				<input type="text" name="" id="" placeholder="+54 3777-201788" />
			</PhoneContainer>
			<MessageContainer>
				<label htmlFor="Name">Mensaje</label>
				<input type="text" name="" id="" placeholder="Me interesó..." />
			</MessageContainer>
			<ButtonSubmitContainerStyled>
				<ButtonStyled>Enviar formulario</ButtonStyled>
			</ButtonSubmitContainerStyled>
		</StyledForm>
	);
}

export default Form;
