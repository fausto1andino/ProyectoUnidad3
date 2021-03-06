
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/core";
import HeroNav from "./HeroNav/HeroNav";
import Output from "../Output/Output";
import Banner from "../../banner";

const Hero = () => {
  return (
    
    <section css={styles} className="hero">
      <HeroNav />
      <Banner />
      <Output />
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #210042;
  background-image:url("https://i.gifer.com/WG8P.gif");
`;

export default Hero;
