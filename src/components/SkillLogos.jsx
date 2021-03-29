import React from 'react';
import styled from 'styled-components';
import React_logo from '../image/logos/React_logo.png';
import Javascript_logo from '../image/logos/JavaScript_logo.png';
import CSS_logo from '../image/logos/CSS_logo.png';
import Express_logo from '../image/logos/Express_logo.PNG';
import Node_logo from '../image/logos/Node_logo.png';
import Docker_logo from '../image/logos/Docker_logo.png';
import HTML5_logo from '../image/logos/HTML5_logo.png';
import Postgresql_logo from '../image/logos/Postgresql_logo.png';
import Pycharm_logo from '../image/logos/Pycharm_logo.png';
import Python_logo from '../image/logos/Python_logo.png';
import Vscode_logo from '../image/logos/Vscode_logo.png';
import Github_logo from '../image/logos/Github_logo.png';
import Bootstrap_logo from '../image/logos/Bootstrap_logo.png';

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
  padding-top: 5%;
`;

// const CardWrapper = styled.div`
//   width: 28rem;
//   height: 100%;
//   padding: 2%;
// `;

const Card = styled.div`
  width: 7rem;
  height: 7rem; 
`;

const LogoWrapper = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
`;

const SkillLogos = () => {

  const listOfLogo = [React_logo, Javascript_logo, CSS_logo, HTML5_logo, Node_logo,  Express_logo, Docker_logo,  Postgresql_logo,  Vscode_logo, Github_logo, Bootstrap_logo, Python_logo, Pycharm_logo ];
  
  return(
    <SkillWrapper>
      {listOfLogo.map((logo) => {
        return(
          <div>
          <Card className="card">
            <LogoWrapper className="logo" src={logo} />
          </Card>
          
          </div>
          
        ) 
        })
      }
    </SkillWrapper>
  );
}

export default SkillLogos; 