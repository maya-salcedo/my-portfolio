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

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px 5px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  width: 15rem;
  height: 20rem;
  text-align: center;
  margin: 1rem 3rem;
  padding: 1rem, 3rem;
  @media(max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 4rem;
    height: 100%;
    grid-template-areas:
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". .";
  }
`;

const Card = styled.div`
  width: 6rem;
  height: 6rem;
  
`;

const LogoWrapper = styled.img`
  width: 15vmin;
  height: 15vmin;
  padding: 2vmin;
`;

const SkillHex = () => {

  const listOfLogo = [React_logo, Javascript_logo, CSS_logo, Express_logo, Node_logo, Docker_logo, HTML5_logo, Postgresql_logo, Pycharm_logo, Python_logo, Vscode_logo, Github_logo];
  
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

export default SkillHex; 
