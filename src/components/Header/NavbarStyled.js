import styled from "styled-components";

export const NavbarStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	.links {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		& > ul {
			display: flex;
			gap: 20px;
		}
		& > ul a {
			color: #fff;
			font-size: 1.1rem;
			font-weight: 500;
			background-color: rgba(0, 0, 0, 0.2);
			text-decoration: none;
			padding: 5px;
			border-radius: 5px;
			transition: all 0.3s ease;
		}
		& ul a:hover {
			background-color: rgba(0, 0, 0, 0.4);
		}
		& ul i {
			font-size: 0.7rem;
		}
		@media (max-width: 1000px) {
			display: none;
		}
	}
	.burguerContainer {
		@media (min-width: 1000px) {
			z-index: 300;
			display: none;
		}
	}
	@media (max-width: 1000px) {
		.links.active {
			display: flex;
			position: fixed;
			width: 100%;
			height: 100vh;
			top: 0;
			right: 0;
			background-image: linear-gradient(
				to bottom,
				#3f30a4,
				#343eaa,
				#2949af,
				#1f54b3,
				#1a5eb5,
				#2162b4,
				#2867b3,
				#306bb2,
				#3a6cae,
				#426eab,
				#496fa7,
				#4f70a3
			);
			z-index: 3;
		}
		.links.active ul {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			text-align: center;
			height: 80%;
			width: 100%;
		}
	}
`;

export const NavbarCardsStyled = styled.div`
	height: 400px;
	width: 300px;
	background-color: rgba(0, 0, 0, 0.7);
	flex-direction: column;
	display: none;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	position: absolute;
	z-index: 4;
	right: 8%;
	top: 14%;
	border-radius: 10px;
	color: #fff;
	padding: 20px;

	& ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		height: 100%;
		width: 100%;
	}
	& ul li p {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	& ul li a {
		text-decoration: none;
		color: #ffff;
		font-size: 1.3rem;
		font-weight: 500;
	}
`;
