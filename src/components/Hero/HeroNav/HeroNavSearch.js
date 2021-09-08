/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavSearch = () => {
  const { search, setSearch, handleSearch, activeLink } = useContext(
    MovieContext
  );

  return (
    <form css={styles} onSubmit={handleSearch}>
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
  @media (max-width: 860px) {
    input {
      width: 220px;
    }
  }
`;

export default HeroNavSearch;
