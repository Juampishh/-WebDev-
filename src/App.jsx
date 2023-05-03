// import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header.jsx";
import Icon from "./components/Header/icon.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import About from "./components/About/About";
import Price from "./components/Price/Price";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Icon></Icon>
        <Navbar />
      </Header>
      <Layout>
        <Hero />
        <About />
        <Price />
      </Layout>
    </>
  );
}

export default App;
