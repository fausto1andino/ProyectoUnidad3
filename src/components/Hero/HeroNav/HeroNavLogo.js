/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";

const HeroNavLogo = () =>{ 
  return(
   
    <div>
      <img className="Logo"css={styles2} src="https://cdn-icons-png.flaticon.com/512/705/705062.png" alt="TODOFILMS Logo"/>,
      <h2 className="titulo"css={styles}> TODOFILMS </h2>,
    </div>
  
  );
};


const styles = css`
  position: fixed;
  font-size: 40px;
  color: #a06cd5;
  font-weight: 900;
  user-select: none;
  transform: translateY(-32px);
  
  @media (min-width: 257px) and (max-width: 278px) {

    .Logo{
      transform: translateX(500px);
    }
 
  }
   @media (min-width: 279px) and (max-width: 280px) {
    .Logo{
      transform: translateX(500px);
    }
  }

  @media (min-width: 1127px) {
    left:200px;
  }
  
  @media (max-width: 1126px){
    right:2000px;
  }

`;
const styles2 = css`
 
   position: fixed;
    left: 20px;
    width:50px;
    margin-left: 130px;
    transform: translateY(-20px);

    @media (min-width: 257px) and (max-width: 278px) {
        width:1px;
    }
     @media (min-width: 279px) and (max-width: 280px) {
        width:1px;
    }

   @media (max-width: 907px) {    
    margin-left:5px;
    transition: all 800ms ease-in-out;
  }
    
  

`;



export default HeroNavLogo;
