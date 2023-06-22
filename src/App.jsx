import React from "react";
import Header from "./Component/Header";
import Johnatan from "./Component/Johnatan";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import We_work from "./Component/We_work";
import '../src/style.css';
import Features from "./Component/Features";
import Logoipsum from "./Component/Logoipsum";
import Footer from "./Component/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Johnatan />
      <We_work />
      <Features />
      <Logoipsum />
      <Footer />
    </div>
  );
}

export default App;
