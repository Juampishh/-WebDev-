import styled from "styled-components";

export const NavbarStyled = styled.nav`
	max-width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	& > ul {
		display: flex;
		gap: 10px;
	}
	& > a {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
	}
`;
