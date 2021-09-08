/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
`;

export default Hero;
