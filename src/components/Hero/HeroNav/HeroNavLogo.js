/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroNavLogo = () =>{ 
  return(
    <div>
      <img css={styles2} src="https://cdn-icons-png.flaticon.com/512/705/705062.png" alt="TODOFILMS Logo"/>,
      <h2 css={styles}> TODOFILMS </h2>,
      <img css={styles3}
        src="https://cdn-icons-png.flaticon.com/512/2932/2932802.png" alt="buscar"
      />

    </div>
  );
};


const styles = css`
  position: fixed;
  font-size: 22px;
  color: #a06cd5;
  font-weight: 900;
  user-select: none;
  transform: translateY(-20px);
  

`;
const styles2 = css`
 
    position: fixed;
    left: 20px;
    width:50px;
    margin-left: 130px;
    transform: translateY(-20px);
  

`;

const styles3 = css`
    
    position: fixed;
    left:1200px;
    width: 50px;
    object-fit: contain;
    transform: translateY(-20px);
    
`;

export default HeroNavLogo;
