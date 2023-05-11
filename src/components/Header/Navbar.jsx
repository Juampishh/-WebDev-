/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarCardsStyled, NavbarStyled } from "./NavbarStyled.js";
import { useState } from "react";
import BurguerButton from "./BurguerButton.jsx";

function Navbar() {
	// Función para desplegar el menu en dispositivos moviles
	// estado seteado por defecto en false para que se oculte el menu predeterminadamente
	const [open, setOpen] = useState(false);
	//Creamos la función para controlar el estado del menu
	const openMenu = () => {
		// Si el estado no está "open" es falso, significa que el menu está cerrado y puede ser abierto
		// Por lo tanto cambiamos el estado a Verdadero.
		setOpen(!open);
	};

	//Funcion para controlar los estados del boton mas informacion
	const [hasClicked, setHasClicked] = useState(false);
	const [CardStyle, setCardStyle] = useState({});

	const handleClick = () => {
		// Si el estado "hasClicked" es verdadero, significa que el elemento ya ha sido clickeado y debe ser mostrado
		if (hasClicked) {
			// Cambiamos el estado "hasClicked" a falso para indicar que el elemento no está siendo mostrado
			setHasClicked(false);
			// Cambiamos el estado "cardStyle" para mostrar el elemento en la página
			setCardStyle({ display: "none" });
		} else {
			// Si el estado "hasClicked" es falso, significa que el elemento aún no ha sido clickeado y debe ser ocultado
			// Cambiamos el estado "hasClicked" a verdadero para indicar que el elemento está siendo mostrado
			setHasClicked(true);
			// Cambiamos el estado "cardStyle" para ocultar el elemento en la página
			setCardStyle({ display: "flex" });
		}
	};

	return (
		<>
			<NavbarStyled>
				<div className={`links ${open ? "active" : ""}`}>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a onClick={handleClick} href="#">
								Información{" "}
								<i className="fa-solid fa-chevron-down icon-one"></i>
							</a>
							<i class="fa-solid fa-chevron-right icon-two"></i>
						</li>
						<li>
							<a href="#">Nuestro trabajo</a>
						</li>
					</ul>
				</div>

				<div className="burguerContainer" onClick={openMenu}>
					<BurguerButton className="burger"></BurguerButton>
				</div>
			</NavbarStyled>
			<NavbarCardsStyled className="fadeIn" style={CardStyle}>
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
