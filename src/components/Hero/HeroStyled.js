import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;

  align-items: center;
  width: 100%;
  color: white;
  gap: 30px;
  padding: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 50%;
  h1 span {
    font-size: 5rem;
    color: #2e78b9;
  }
  h1 {
    color: #c2c2c2;
    font-size: 3.5rem;
    margin: 10px 0;
  }
  h2 {
    color: #c2c2c2;
    font-size: 2rem;
    margin: 10px 0;
  }
  p {
    color: #c2c2c2;
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ArrowContainer = styled.div`
  font-size: 35px;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;

  background-color: transparent;
  color: #fff;
`;
