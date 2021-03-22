import React from 'react';
import styled from 'styled-components';
import SkillChart from './SkillChart';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  padding: 5% 10% 0 5%;
  margin: 0;

`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
`;



const Skills = () => {
    return(
        <ContainerWrapper>
            <Header>My Skills</Header>
            <ContentWrapper>
            <SkillChart />
            </ContentWrapper>
        </ContainerWrapper>
    )
}

export default Skills;