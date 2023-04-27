/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarStyled } from "./NavbarStyled.js";

function Navbar() {
	return (
		<NavbarStyled>
			<ul>
				<li>
					<a href="#">
						Home <i class="fa-solid fa-chevron-down"></i>
					</a>
				</li>
				<li>
					<a href="#">
						Sobre nosotros <i class="fa-solid fa-chevron-down"></i>
					</a>
				</li>
				<li>
					<a href="#">
						Nuestro trabajo <i class="fa-solid fa-chevron-down"></i>
					</a>
				</li>
			</ul>
		</NavbarStyled>
	);
}

export default Navbar;
