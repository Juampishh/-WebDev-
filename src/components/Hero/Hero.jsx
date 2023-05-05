import React from "react";
import {
	StyledHero,
	HeroTextContainerStyled,
	HeroImageContainer,
	ArrowContainer,
} from "./HeroStyled";
import Button from "../Button/Button";

function Hero() {
	return (
		<>
			<StyledHero>
				<HeroTextContainerStyled className="fadeInLeft">
					<h1>
						<span> PageCrafters</span>
					</h1>
					<h1>Tu página web, a un click de distancia.</h1>
					<h2>Potencia tu presencia online con nuestra ayuda</h2>
					<p>
						Una página web aumenta la visibilidad y accesibilidad en línea,
						promueve productos/servicios, interactúa con audiencias y construye
						una marca sólida.
					</p>
					<Button>Saber mas</Button>
				</HeroTextContainerStyled>
				<HeroImageContainer className="fadeIn">
					<img
						src="https://esdima.com/wp-content/uploads/2016/02/curso-webs-madrid.png"
						alt=""
					/>
				</HeroImageContainer>
			</StyledHero>
			<ArrowContainer className="pulse">
				<i className="fa-solid fa-arrow-down"></i>
			</ArrowContainer>
		</>
	);
}

export default Hero;
