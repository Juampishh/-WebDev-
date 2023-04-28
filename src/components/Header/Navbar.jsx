/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarCardsStyled, NavbarStyled } from "./NavbarStyled.js";
import { useState } from "react";

function Navbar() {
	const [active, setActive] = useState(false);
	return (
		<>
			<NavbarStyled>
				<ul>
					<li>
						<a href="#">
							Home <i className="fa-solid fa-chevron-down"></i>
						</a>
					</li>
					<li>
						<a href="#" onClick={() => setActive(!active)}>
							Información <i className="fa-solid fa-chevron-down"></i>
						</a>
					</li>
					<li>
						<a href="#">
							Nuestro trabajo <i className="fa-solid fa-chevron-down"></i>
						</a>
					</li>
				</ul>
			</NavbarStyled>
			<NavbarCardsStyled className={active ? "active" : null}>
				<ul>
					<li>
						<p>
							<i className="fa-solid fa-users"></i>
							<a href="#">Sóbre nosótros</a>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-people-carry-box"></i>
							<a href="#">¿Cómo trabajámos?</a>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-building"></i>
							<a href="#">¿Quiénes somos?</a>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-phone-volume"></i>
							<a href="#">Contáctanos</a>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-share-nodes"></i>
							<a href="#">Redes sociales</a>
						</p>
					</li>
				</ul>
			</NavbarCardsStyled>
		</>
	);
}

export default Navbar;
