import styled from "styled-components";
export const StyledAboutContainer = styled.section`
  height: 80vh;
  width: 100%;
`;

export const AboutStyled = styled.div`
  margin: auto;
  margin-top: 70px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 0 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextAboutStyled = styled.div`
  width: 45%;
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;

  text-align: center;
  color: #c2c2c2;
  h1 {
    font-size: 3rem;
    color: #c1c1c1;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const ImgContainerAboutStyled = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 3rem;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxStyledContainer = styled.div`
  width: 100%;
  padding: 20px;
  color: #fff;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1a60b4;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: #1f85d0;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;
