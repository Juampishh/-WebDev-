import styled from "styled-components";
export const ContainerStyledPrice = styled.div`
	width: 100%;
	height: 73vh;
	background-color: transparent;
	display: flex;

	margin-top: 20px;
	justify-content: center;
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
