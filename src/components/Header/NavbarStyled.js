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
