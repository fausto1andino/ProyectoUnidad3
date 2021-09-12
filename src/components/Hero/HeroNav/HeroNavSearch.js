/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavSearch = () => {
  const { search, setSearch, handleSearch, activeLink } = useContext(
    MovieContext
  );

  return (
    <form css={styles} onSubmit={handleSearch}>
      {activeLink !== "Popular" && (
      <img css={styles2}
        src="https://cdn-icons-png.flaticon.com/512/2932/2932802.png" alt="buscar"
      />
      )}
      {activeLink !== "Popular" && (
    
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
      )}
      
    </form>
  );
};

const styles = css`
  height: 40px;
  min-height: 40px;
  input {
    position: fixed;
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid white;
    background: white;
    padding: 10px 16px;
    margin-left:-250px;
    width: 260px;
    color: black;
    &::placeholder {
      color: black;
      letter-spacing: 1px;
    }
  }
 
  @media (min-width: 257px) and (max-width: 278px) {
    
    input {
      position: relative;
      width: 10%;
      margin-top:7px;
      transform: translateX(150px);
      height: 10px;
      margin-top:100px;
    }
  }
  @media (min-width: 279px) and (max-width: 280px) {
    form{
      max-width: 2px;
      
    }
    input {
      transform: translateY(150px);
      margin-top:50px;
      position: relative;
      margin-top:7px;
      transform: translateX(130px);
      height: 10px;
    }
  }
  
  @media (min-width: 319px) and (max-width: 499px) {
    form{
      width: 5px;
    }
    input {
      height: 10px;
      transform: translateX(165px);
      margin-top:8px;

    }
  }
  @media (max-width: 500px){
    input {
      width: 220px;
    }
  }
  @media (min-width: 501px) and (max-width: 767px) {
    input {
      width: 220px;
      transform: translateX(100px)
    }
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    input {
      width: 220px;
    }
  }
  @media (min-width: 1001px) and (max-width: 1024px) {
    input {
      width: 220px;
    }
  }

  
`;
const styles2 = css`
    
    position: fixed;
    left:1200px;
    width: 50px;
    object-fit: contain;
    transform: translateY(-10px);
    
    @media (max-width: 1690px) {
      position: fixed;
      top: 0;
      left: 0;
      opacity: 1;
      min-height: 100vh;
      padding-left: 0;
      padding: 20px 50px;
      &.hidden {
        left: -600px;
        opacity: 0;
      }
    
`;
export default HeroNavSearch;
