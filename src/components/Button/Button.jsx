import React from "react";
import { ButtonStyled } from "./StyledButton";

function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

export default Button;
