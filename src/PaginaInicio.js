import React from 'react';
import './App2.css';
import { MovieState } from "./Context/MovieContext";
import Hero from "./components/Hero/Hero";
const PaginaInicio = ({handleLogout}) => {
   return (
        <MovieState>
        <button className="logoutf2"onClick={handleLogout}>Logout</button>
            <Hero>
            </Hero>
        </MovieState>
   );
 };
export default PaginaInicio;