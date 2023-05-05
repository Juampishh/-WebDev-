import styled from "styled-components";
export const StyledForm = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 20px;
  @media (min-width: 768px) {
    width: 100%;
    h1 {
      letter-spacing: 2px;
      color: #fff;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 30px;
      }
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
    font-size: 22px;
    padding: 10px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 30%;
    height: 40px;
  }
  @media (max-width: 768px) {
    label {
      font-size: 12px;
    }
    input {
      width: 100%;
    }
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
  @media (max-width: 768px) {
    label {
      font-size: 12px;
    }
    input {
      width: 100%;
    }
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
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
    label {
      font-size: 12px;
    }
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

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 0px;
    }
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
  @media (max-width: 768px) {
    label {
      font-size: 12px;
    }
    input {
      width: 100%;
    }
  }
`;
