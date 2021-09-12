/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import Container from "../../GlobalComponents/Container";
import HeroNavLogo from "./HeroNavLogo";
import HeroNavMenu from "./HeroNavMenu";
import HeroNavSearch from "./HeroNavSearch";

const HeroNav = () => {
  const { hiddenMenu, setHiddenMenu } = useContext(MovieContext);

  return (
    <nav css={styles}>
      <Container>
        <div class="wrapper">
          <HeroNavLogo />
          <HeroNavMenu />
        </div>

      
        <HeroNavSearch />
       
        
        <i
          onClick={() => setHiddenMenu(!hiddenMenu)}
          id="burgerMenu"
          className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
        ></i>
      </Container>
    
    </nav>
  );
};

const styles = css`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(36, 0, 70, 0.61),
    #10002b
);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #f9a5ff;
      cursor: pointer;
      display: none;
    }
  }
  @media (min-width: 257px) and (max-width: 278px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(80px);
      }
    }
  }
  @media (min-width: 279px) and (max-width: 280px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(85px);
      }
    }
    
  }
  
  @media (min-width: 319px) and (max-width: 499px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(103px);
      }
    }
  }
  @media (min-width: 501px) and (max-width: 767px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(140px);
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(200px);
      }
    }
  }
  @media (min-width: 1001px) and (max-width: 1024px) {
    .container {
      #burgerMenu {
        display: block;
        transform: translateX(250px);
      }
    }
  }
  @media (max-width: 1690px) {
    .container {
      #burgerMenu {
        display: block
      }
    }
  }

  @media (max-width: 1690px) {
    .container{
       
      
        max-width: 30%;  
       
      

    }
  }
`;

export default HeroNav;
