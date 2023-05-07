import styled from "styled-components";
export const StyledAboutContainer = styled.section`
	height: 80vh;
	width: 100%;
`;

export const AboutStyled = styled.div`
	margin: auto;
	margin-top: 70px;
	width: 90%;
	display: flex;
	justify-content: space-between;
	height: 100%;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	padding: 0 20px;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const TextAboutStyled = styled.div`
	width: 45%;
	gap: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	color: #c2c2c2;
	h1 {
		font-size: 3rem;
		color: #c1c1c1;
	}
	p {
		font-size: 1.2rem;
	}
`;

export const ImgContainerAboutStyled = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 100%;
	}
`;
