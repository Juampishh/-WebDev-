import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Icon from "./components/Header/icon.jsx";
import Navbar from "./components/Header/Navbar.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Header>
			<Icon>
				<img src="./assets/imgs/icon.jpg" alt="#" />
			</Icon>
			<Navbar />
		</Header>
	);
}

export default App;
