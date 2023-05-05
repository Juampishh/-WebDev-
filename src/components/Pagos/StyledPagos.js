import styled from "styled-components";

export const StyledPagosContainer = styled.div`
  width: 100%;
  height: 50vh;
  /* border-top: 1px solid #fff; */
  margin-top: 320px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: #fff;
  font-size: 28px;
  justify-content: center;
  align-items: center;
  h1 {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
    border-radius: 10px;
    padding: 10px;
  }
`;

export const CardContainerPagos = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CardStyledPagos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: #fff;
  width: 30%;
  height: 40%;
  border-radius: 10px;
  h2 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
