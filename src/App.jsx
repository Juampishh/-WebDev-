import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

export default App;
