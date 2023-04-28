import styled from "styled-components";

export const NavbarStyled = styled.nav`
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
`;

export const NavbarCardsStyled = styled.div`
	height: 400px;
	width: 300px;
	background-color: rgba(0, 0, 0, 0.7);
	flex-direction: column;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	position: absolute;
	z-index: 4;
	right: 10%;
	top: 12%;
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
