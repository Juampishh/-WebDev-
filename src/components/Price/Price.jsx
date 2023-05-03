import React from "react";
import {
  CardContainerStyledPrice,
  CardStyledPrice,
  CardStyledPriceDiscount,
  ContainerStyledPrice,
  TitleContainerStyled,
} from "./StyledPrice";
import { ButtonStyled } from "../Button/StyledButton";

function Price() {
  return (
    <>
      <TitleContainerStyled>
        <h1>Costo del servicio</h1>
      </TitleContainerStyled>
      <ContainerStyledPrice>
        <CardContainerStyledPrice>
          <CardStyledPrice>
            <h3>Landing Page</h3>
            <h5>
              <i class="fa-solid fa-check"></i> Bajo costo
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Facil Acesibilidad
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Muy intuitiva
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Excelente como primera web
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Gran capacidad de persuacion
            </h5>
            <h5>
              <i class="fa-solid fa-xmark"></i> Un solo sitio
            </h5>
            <h5>
              <i class="fa-solid fa-xmark"></i> No es escalable
            </h5>
            <h2>¡Descuento unico!</h2>
            <CardStyledPriceDiscount>
              <h2>52.000</h2>
              <h1>$45.000</h1>
            </CardStyledPriceDiscount>
            <ButtonStyled>Comprar Ahora</ButtonStyled>
          </CardStyledPrice>
          <CardStyledPrice>
            <h3>OnePage</h3>
            <h5>
              <i class="fa-solid fa-check"></i> Bajo costo
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Facil Acesibilidad
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Ideal para publicidad
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Excelente para promocionar un
              producto
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Gran capacidad de persuacion
            </h5>
            <h5>
              <i class="fa-solid fa-xmark"></i> Un solo sitio
            </h5>
            <h5>
              <i class="fa-solid fa-xmark"></i> No es escalable
            </h5>
            <h2>¡Descuento unico!</h2>
            <CardStyledPriceDiscount>
              <h2>$33.000</h2>
              <h1>$28.000</h1>
            </CardStyledPriceDiscount>
            <ButtonStyled>Comprar Ahora</ButtonStyled>
          </CardStyledPrice>
          <CardStyledPrice>
            <h3>Eccomerce</h3>
            <h5>
              <i class="fa-solid fa-check"></i> Excelente para tu negocio
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Facil Acesibilidad
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Muy intuitiva
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Gran capacidad de incrementar
              ventas
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Gran capacidad de persuacion
            </h5>
            <h5>
              <i class="fa-solid fa-xmark"></i> Hasta 6 sitios
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Es escalable
            </h5>
            <h5>
              <i class="fa-solid fa-check"></i> Genera mayor presencia
            </h5>
            <h2>¡Descuento unico!</h2>
            <CardStyledPriceDiscount>
              <h2>$120.000</h2>
              <h1>$95.000</h1>
            </CardStyledPriceDiscount>
            <ButtonStyled>Comprar Ahora</ButtonStyled>
          </CardStyledPrice>
        </CardContainerStyledPrice>
      </ContainerStyledPrice>
    </>
  );
}

export default Price;
