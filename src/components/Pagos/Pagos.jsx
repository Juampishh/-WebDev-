import React from "react";
import {
  CardContainerPagos,
  CardStyledPagos,
  StyledPagosContainer,
} from "./StyledPagos";

function Pagos() {
  return (
    <StyledPagosContainer>
      <h1>Medios de pagos</h1>
      <CardContainerPagos>
        <CardStyledPagos>
          <h2>Tarjetas de debito/credito</h2>
          <h1>
            <i class="fa-solid fa-credit-card"></i>
          </h1>
        </CardStyledPagos>
        <CardStyledPagos>
          <h2>Transferencias bancarias</h2>
          <h1>
            <i class="fa-solid fa-building-columns"></i>
          </h1>
        </CardStyledPagos>
        <CardStyledPagos>
          <h2>PayPal</h2>
          <h1>
            <i class="fa-brands fa-paypal"></i>
          </h1>
        </CardStyledPagos>
      </CardContainerPagos>
    </StyledPagosContainer>
  );
}

export default Pagos;
