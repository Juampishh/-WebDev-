import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  background-color: rgba(4, 57, 126, 0.836);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-top: -120px;
    width: 130px;
    height: 70px;
    border-radius: 5px;
  }
`;
