import { useState } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container flex justify-evenly items-center mx-auto pt-12">
        <Cards />
      </div>
    </>
  );
}

export default App;
