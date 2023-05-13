import styled from "styled-components";

export const StyledPagosContainer = styled.div`
  width: 100%;
  height: 30vh;
  /* border-top: 1px solid #fff; */

  display: flex;
  flex-direction: column;
  gap: 50px;
  color: #fff;
  font-size: 28px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
    h1 {
      font-size: 45px;
    }
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CardContent = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
  flex-direction: column;
  text-align: center;

  font-size: 20px;
  h1 {
    font-size: 90px;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const CardStyledPagos = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  height: 100%;
`;
