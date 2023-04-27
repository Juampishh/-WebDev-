/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarStyled } from "./NavbarStyled.js";

function Navbar(props) {
	return (
		<NavbarStyled>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Sobre nosotros</a>
				</li>
				<li>
					<a href="#">Nuestro trabajo</a>
				</li>
			</ul>
		</NavbarStyled>
	);
}

export default Navbar;
