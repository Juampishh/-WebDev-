/* eslint-disable no-unused-vars */
import React from "react";
import { HeaderContainerStyled } from "./HeaderStyled";

function Header({ children }) {
	return <HeaderContainerStyled>{children}</HeaderContainerStyled>;
}

export default Header;
