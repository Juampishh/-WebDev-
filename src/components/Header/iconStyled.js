import styled from "styled-components";

export const IconStyled = styled.img`
  width: 200px;
  height: auto;

  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
