import styled from "styled-components";
export const StyledForm = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 80px;
  display: flex;
  border-top: 1px solid #fff;
  flex-direction: column;

  border-radius: 5px;
  text-align: flex-start;
  padding: 20px;
  @media (min-width: 768px) {
    width: 100%;
    h1 {
      text-decoration: underline;
      letter-spacing: 2px;

      color: #fff;
    }
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  height: 50px;
  gap: 15px;
  color: #fff;
  label {
    padding: 10px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 30%;
    height: 40px;
  }
`;
export const EmailContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 50px 0;
  display: flex;
  gap: 30px;
  color: #fff;
  label {
    padding: 10px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 30%;
    height: 40px;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  gap: 30px;
  color: #fff;
  label {
    padding: 10px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 50%;
    height: 90px;
  }
`;
export const ButtonSubmitContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    border-radius: 5px;
    border: 2px solid #fff;
    width: 50%;
    height: 60px;
    cursor: pointer;
    background-color: transparent;

    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const PhoneContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 50px 0;
  display: flex;
  gap: 8px;
  color: #fff;
  label {
    padding: 10px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 30%;
    height: 40px;
  }
`;