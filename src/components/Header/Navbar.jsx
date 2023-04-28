/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarCardsStyled, NavbarStyled } from "./NavbarStyled.js";
import { useState } from "react";

function Navbar() {
  const [hasClicked, setHasClicked] = useState(false);
  const [CardStyle, setCardStyle] = useState({});

  //Funcion para controlar los estados del boton mas informacion

  const handleClick = () => {
    // Si el estado "hasClicked" es verdadero, significa que el elemento ya ha sido clickeado y debe ser mostrado
    if (hasClicked) {
      // Cambiamos el estado "hasClicked" a falso para indicar que el elemento no está siendo mostrado
      setHasClicked(false);
      // Cambiamos el estado "cardStyle" para mostrar el elemento en la página
      setCardStyle({ display: "flex" });
    } else {
      // Si el estado "hasClicked" es falso, significa que el elemento aún no ha sido clickeado y debe ser ocultado
      // Cambiamos el estado "hasClicked" a verdadero para indicar que el elemento está siendo mostrado
      setHasClicked(true);
      // Cambiamos el estado "cardStyle" para ocultar el elemento en la página
      setCardStyle({ display: "none" });
    }
  };

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
            <a onClick={handleClick} href="#">
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
