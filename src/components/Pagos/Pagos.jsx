import React from "react";
import {
  CardContainerPagos,
  CardContent,
  CardStyledPagos,
  StyledPagosContainer,
} from "./StyledPagos";

function Pagos() {
  return (
    <StyledPagosContainer>
      <h1>Médios de pagos</h1>
      <CardContainerPagos>
        <CardStyledPagos>
          <CardContent>
            <h2>Tarjétas de débito/crédito</h2>
            <h1>
              <i className="fa-solid fa-credit-card"></i>
            </h1>
          </CardContent>
        </CardStyledPagos>
        <CardStyledPagos>
          <CardStyledPagos>
            <CardContent>
              <h2>Transferencias bancarias</h2>
              <h1>
                <i className="fa-solid fa-building-columns"></i>
              </h1>
            </CardContent>
          </CardStyledPagos>
        </CardStyledPagos>
        <CardStyledPagos>
          <CardContent>
            <h2>PayPal</h2>
            <h1>
              <i className="fa-brands fa-paypal"></i>
            </h1>
          </CardContent>
        </CardStyledPagos>
      </CardContainerPagos>
    </StyledPagosContainer>
  );
}

export default Pagos;
