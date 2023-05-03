import styled from "styled-components";
export const StyledAboutContainer = styled.section`
  height: 50vh;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    #496fa7 #3f30a4,
    #343eaa,
    #2949af,
    #1f54b3,
    #1a5eb5,
    #2162b4,
    #2867b3,
    #3a6cae,
    #306bb2,
    #426eab
  );
`;

export const AboutStyled = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const TextAboutStyled = styled.div`
  width: 45%;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;
