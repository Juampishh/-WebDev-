import styled from "styled-components";
export const sectionAboutContainerStyled = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ContainerStyledPrice = styled.div`
  width: 100%;
  height: 300px;
  background-color: transparent;
  display: flex;
  gap: 50px;
  margin-bottom: 100px;
  margin-top: 20px;
  justify-content: center;
  .plan-card {
    background: #fff;
    width: 25rem;
    height: 32rem;
    padding-left: 3rem;
    padding-right: 4rem;
    padding-top: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    border-bottom: 4px solid #000446;
    box-shadow: 0 6px 30px rgba(207, 212, 222, 0.3);
    font-family: "Poppins", sans-serif;
  }

  .plan-card h2 {
    margin-bottom: 15px;
    font-size: 40px;
    font-weight: 600;
  }

  .plan-card h2 span {
    display: block;
    margin-top: -4px;
    color: #4d4d4d;
    font-size: 22px;
    font-weight: 400;
  }

  .etiquet-price {
    position: relative;
    background: #fdbd4a;
    width: 23.46rem;
    margin-left: -0.65rem;
    padding: 0.2rem 1.2rem;
    border-radius: 5px 0 0 5px;
  }

  .etiquet-price p {
    margin: 0;
    padding-top: 0.4rem;
    display: flex;
    font-size: 3.2rem;
    font-weight: 500;
  }

  .etiquet-price p:before {
    content: "$";
    margin-right: 5px;
    font-size: 15px;
    font-weight: 300;
  }

  .etiquet-price p:after {
    content: "/ handle";
    margin-left: 5px;
    font-size: 22px;
    font-weight: 300;
  }

  .etiquet-price div {
    position: absolute;
    bottom: -23px;
    right: 0px;
    width: 0;
    height: 0;
    border-top: 13px solid #c58102;
    border-bottom: 10px solid transparent;
    border-right: 13px solid transparent;
    z-index: -6;
  }

  .benefits-list {
    margin-top: 16px;
  }

  .benefits-list ul {
    padding: 0;
    font-size: 24px;
  }

  .benefits-list ul li {
    color: #4d4d4d;
    list-style: none;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .benefits-list ul li svg {
    width: 0.9rem;
    fill: currentColor;
  }

  .benefits-list ul li span {
    font-weight: 300;
  }

  .button-get-plan {
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;
  }

  .button-get-plan a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000446;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .button-get-plan a:hover {
    transform: translateY(-3%);
    box-shadow: 0 3px 10px rgba(207, 212, 222, 0.9);
  }

  .button-get-plan .svg-rocket {
    margin-right: 10px;
    width: 0.9rem;
    fill: currentColor;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 250vh;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    gap: 50px;
    .plan-card {
      width: 80%;
    }
    .plan-card h2 {
      font-size: 30px;
    }
    .plan-card h2 span {
      font-size: 15px;
      margin-top: 5px;
    }
    .etiquet-price {
      width: 140%;
    }
    .etiquet-price p::after {
      display: none;
    }
    .benefits-list ul {
      font-size: 15px;
    }
    .button-get-plan a {
      width: 100%;
      height: 50px;
    }
    margin-bottom: -150px;
  }
  @media (max-width: 768px) {
    .plan-card {
      height: 450px;
    }
  }
`;
export const TitleContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 0 0;
  color: #fff;
  h1 {
    color: #f9d5f1;
    letter-spacing: 2px;
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    margin: 0;
    h1 {
      display: none;
    }
  }
`;

export const CardContainerStyledPrice = styled.div`
  width: 97%;
  height: 700px;
  background-color: #1a60b4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  padding: 40px 20px;
  gap: 20px;
  @media (max-width: 768px) {
  }
`;

export const CardStyledPrice = styled.div`
  background-color: #1f85d0;
  border: 2px solid #306bb2;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32%;
  height: 100%;
  text-align: center;
  gap: 15px;
  color: white;
  h3 {
    color: #8adde5;
    font-size: 2rem;
    text-decoration: underline;
  }
  h5 {
    color: #fffbf3;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
  h2 {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const CardStyledPriceDiscount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 20px;
  h2 {
    text-decoration: line-through;
  }
`;
