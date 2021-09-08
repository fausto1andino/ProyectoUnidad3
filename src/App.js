import React from "react";
import { MovieState } from "./Context/MovieContext";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Banner from "./banner";

const App = () => {
  return (
    
    <MovieState>
      
      <Hero />
    </MovieState>
  );
};

export default App;
