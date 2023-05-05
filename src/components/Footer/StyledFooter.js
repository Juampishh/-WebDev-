import styled from "styled-components";
export const StyledFooterContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  border-top: 1px solid #fff;
  @media (max-width: 768px) {
    height: 15vh;
    ul {
      font-size: 12px;
    }
  }
`;

export const StyledListContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
    cursor: pointer;
  }
`;

export const StyledSocialContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
  }
`;

export const StyledOtherContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
  }
`;

export const StyledPhoneContainer = styled.div`
  margin: auto;
  width: 20%;
  color: #fff;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
