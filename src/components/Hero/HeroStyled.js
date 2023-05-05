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
    margin-bottom: 8rem;
  }

  .rocket {
    position: absolute;
    top: 45%;
    z-index: -1;
    width: 80px;
    left: 30%;
  }

  .rocket .rocket-body {
    width: 80px;
    left: calc(50% - 50px);
    animation: bounce 0.5s infinite;
  }

  .rocket .rocket-body .body {
    background-color: #dadada;
    height: 180px;
    left: calc(50% - 50px);
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid #f5f5f5;
  }

  .rocket .rocket-body:before {
    content: "";
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 13px;
    background-color: #554842;
    bottom: -13px;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }

  .rocket .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #a75248;
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid #b4b2b2;
  }

  .rocket .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: #a75248;
  }

  .rocket .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  .rocket .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  .rocket .exhaust-flame {
    position: absolute;
    top: 90%;
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    height: 150px;
    left: calc(50% - 14px);
    animation: exhaust 0.2s infinite;
  }

  .rocket .exhaust-fumes li {
    width: 60px;
    height: 60px;
    background-color: #f5f5f5;
    list-style: none;
    position: absolute;
    border-radius: 100%;
  }

  .rocket .exhaust-fumes li:first-child {
    width: 200px;
    height: 200px;
    bottom: -300px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(2) {
    width: 150px;
    height: 150px;
    left: -120px;
    top: 260px;
    animation: fumes 3.2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(3) {
    width: 120px;
    height: 120px;
    left: -40px;
    top: 330px;
    animation: fumes 3s 1s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(4) {
    width: 100px;
    height: 100px;
    left: -170px;
    animation: fumes 4s 2s infinite;
    top: 380px;
  }

  .rocket .exhaust-fumes li:nth-child(5) {
    width: 130px;
    height: 130px;
    left: -120px;
    top: 350px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(6) {
    width: 200px;
    height: 200px;
    left: -60px;
    top: 280px;
    animation: fumes2 10s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(7) {
    width: 100px;
    height: 100px;
    left: -100px;
    top: 320px;
  }

  .rocket .exhaust-fumes li:nth-child(8) {
    width: 110px;
    height: 110px;
    left: 70px;
    top: 340px;
  }

  .rocket .exhaust-fumes li:nth-child(9) {
    width: 90px;
    height: 90px;
    left: 200px;
    top: 380px;
    animation: fumes 20s infinite;
  }

  .star li {
    list-style: none;
    position: absolute;
  }

  .star li:before,
  .star li:after {
    content: "";
    position: absolute;
    background-color: #f5f5f5;
  }

  .star li:before {
    width: 10px;
    height: 2px;
    border-radius: 50%;
  }

  .star li:after {
    height: 8px;
    width: 2px;
    left: 4px;
    top: -3px;
  }

  .star li:first-child {
    top: -30px;
    left: -210px;
    animation: twinkle 0.4s infinite;
  }

  .star li:nth-child(2) {
    top: 0;
    left: 60px;
    animation: twinkle 0.5s infinite;
  }

  .star li:nth-child(2):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(2):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  .star li:nth-child(3) {
    left: 120px;
    top: 220px;
    animation: twinkle 1s infinite;
  }

  .star li:nth-child(4) {
    left: -100px;
    top: 200px;
    animation: twinkle 0.5s ease infinite;
  }

  .star li:nth-child(5) {
    left: 170px;
    top: 100px;
    animation: twinkle 0.4s ease infinite;
  }

  .star li:nth-child(6) {
    top: 87px;
    left: -79px;
    animation: twinkle 0.2s infinite;
  }

  .star li:nth-child(6):before {
    height: 1px;
    width: 5px;
  }

  .star li:nth-child(6):after {
    width: 1px;
    height: 5px;
    top: -2px;
    left: 2px;
  }

  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }

    51% {
      transform: scale(0.8);
    }

    100% {
      background-color: #f5f5f5;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }

    50% {
      transform: translate3d(0px, -4px, 0);
    }

    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @keyframes exhaust {
    0% {
      background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    }

    50% {
      background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%);
    }

    75% {
      background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%);
    }
  }

  @keyframes fumes2 {
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes twinkle {
    80% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    .rocket {
      left: 40%;
      margin-top: 20px;
    }
  }
`;

export const AnimatedStyledHero = styled.div`
  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    bottom: 0;
    left: -26.6%;
    opacity: 0.5;
    position: absolute;
    right: -27%;
    top: 0;
    z-index: -1;
    width: 100vw;
  }
  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }
  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 50%;
  .ui-btn {
    --btn-default-bg: transparent;
    --btn-padding: 15px 20px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: 0.3s;
    --btn-letter-spacing: 0.1rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.137);
    --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
    --hover-btn-color: #fac921;
    --default-btn-color: #fff;
    --font-size: 77px;
    /* 👆 this field should not be empty */
    --font-weight: 600;
    --font-family: Menlo, Roboto Mono, monospace;
    /* 👆 this field should not be empty */
  }

  /* button settings 👆 */

  .ui-btn {
    box-sizing: border-box;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    border: none;
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    border-radius: 5px;
  }

  .ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  .ui-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  .ui-btn:hover,
  .ui-btn:focus {
    background: var(--btn-hover-bg);
  }

  .ui-btn:hover span,
  .ui-btn:focus span {
    color: var(--hover-btn-color);
  }

  .ui-btn:hover span::before,
  .ui-btn:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }

  @keyframes chitchat {
    0% {
      content: "#";
    }

    5% {
      content: ".";
    }

    10% {
      content: "^{";
    }

    15% {
      content: "-!";
    }

    20% {
      content: "#$_";
    }

    25% {
      content: "№:0";
    }

    30% {
      content: "#{+.";}35%{content: "@}-?";
    }

    40% {
      content: "?{4@%";
    }

    45% {
      content: "=.,^!";
    }

    50% {
      content: "?2@%";
    }

    55% {
      content: "\;1}]";
    }

    60% {
      content: "?{%:%";
      right: 0;
    }

    65% {
      content: "|{f[4";
      right: 0;
    }

    70% {
      content: "{4%0%";
      right: 0;
    }

    75% {
      content: "'1_0<";
      right: 0;
    }

    80% {
      content: "{0%";
      right: 0;
    }

    85% {
      content: "]>'";
      right: 0;
    }

    90% {
      content: "4";
      right: 0;
    }

    95% {
      content: "2";
      right: 0;
    }

    100% {
      content: "";
      right: 0;
    }
  }
  h2 {
    color: #c2c2c2;
    font-size: 2rem;
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
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const HeroImageContainer = styled.div`
  width: 40%;
  img {
    margin-top: 50px;
    width: 100%;
    padding-bottom: 75px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ArrowContainer = styled.div`
  font-size: 35px;
  position: relative;
  top: -50px;
  border-radius: 50%;
  cursor: pointer;

  background-color: transparent;
  color: #fff;
  @media (max-width: 768px) {
    color: #000;
    top: 250px;
  }
`;
