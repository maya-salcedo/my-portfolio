import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
  padding: 10% 20%;
  @media (max-width: 1140px) {
    padding: 7% 15%;
  }
  @media (max-width: 999px) {
    padding: 5% 10%;
  }
  @media (max-width: 355px) {
    padding: 5% 3%;
  }
`;

const rotate = keyframes`
  0% {
      filter: hue-rotate(0deg);
    }
  100% {
      filter: hue-rotate(360deg);
    }
`;

const Card = styled.div`
  width: 7rem;
  height: 7rem;
  &:hover {
    background: linear-gradient(#5eaaa8, #a3d2ca, #f8f1f1);
    animation: ${rotate} 1s linear infinite;
    border-radius: 5%;
  }
`;

const LogoWrapper = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
`;

const listOfLogo = [
  'React_logo',
  'JavaScript_logo',
  'CSS_logo',
  'HTML5_logo',
  'Redux_logo',
  'Node_logo',
  'Express_logo',
  'Docker_logo',
  'Postgresql_logo',
  'Mongodb_logo',
  'Vscode_logo',
  'Github_logo',
  'Heroku_logo',
  'Bootstrap_logo',
  'Python_logo',
  'Pycharm_logo',
];

const SkillLogos = () => {
  return (
    <SkillWrapper>
      {listOfLogo.map((logo, index) => {
        return (
          <div key={logo}>
            <Card className="card">
              <LogoWrapper className="logo" src={`image/logos/${logo}.png`} />
            </Card>
          </div>
        );
      })}
    </SkillWrapper>
  );
};

export default SkillLogos;
