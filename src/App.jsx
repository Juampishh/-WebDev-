import { useState } from "react";
<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
=======
import Header from "./components/Header/Header.jsx";
import Icon from "./components/Header/icon.jsx";
import Navbar from "./components/Header/Navbar.jsx";
>>>>>>> a8295be9d40d527822e06164299b782a2f6228b4

function App() {
	const [count, setCount] = useState(0);

<<<<<<< HEAD
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
=======
	return (
		<Header>
			<Icon>
				<img src="./assets/imgs/icon.jpg" alt="#" />
			</Icon>
			<Navbar />
		</Header>
	);
>>>>>>> a8295be9d40d527822e06164299b782a2f6228b4
}

export default App;
