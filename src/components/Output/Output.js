/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Movies from "../Movies/Movies";
import MoviesPagination from "../Movies/MoviesPagination";
import Popular from "../Popular/Popular";
import Row from "../Popular/Row";
import requests from "../../requests";

const Output = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <div css={styles} className="output">
      {activeLink === "Todas" && (
        <Container>
          <React.Fragment>
            <Movies />
            <MoviesPagination />
          </React.Fragment>
        </Container>
      )}
      {activeLink === "Popular" && (
        <Container>
          <Row title="Popular" fetchUrl={requests.fetchTrending}/>   
          <Popular />
        </Container>
      )}
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Output;
