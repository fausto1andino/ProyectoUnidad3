/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import { useContext, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";



const PopularMovies = () => {
  const { popularMovies } = useContext(MovieContext);
  const[trailerUrl, setTrailerUrl]= useState(MovieContext);

  const opts = {
    height:"390",
    width:"100%",
    playerVars: {
     autoplay: 1,
    },
 };
 const handleClick = (popularMovies) =>{
  if (trailerUrl){
      setTrailerUrl("");
  }else{
      movieTrailer(popularMovies?.name || "")
      .then(url =>{
          const urlParams = new URLSearchParams (new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error))
  }
}

  return (
    <div css={styles} className="popularMovies">
     
      <Container>
        {popularMovies.results &&
          popularMovies.results.map((popularMovieItem, index) => (
            <img
              key={index}
              onClick={()=> handleClick(popularMovieItem)}
              src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
              alt="poster"
            />
          ))}
          { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </Container>
      
    </div>

    
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 81vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
        height: 32px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
    img:hover{
      border:1px solid #2d21cc;
      box-shadow: 0 0.5em 0.5em 1px #dc8dff;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default PopularMovies;
