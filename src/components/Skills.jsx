import React from 'react';
import styled from 'styled-components';
import SkillHex from './SkillHex';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  padding: 5% 5% 0 5%;
  margin: 0;

`;

const ContentWrapper = styled.div`
  width:400px; 
  margin-left:auto;
  margin-right:auto;
  
`;



const Skills = () => {
    return(
        <ContainerWrapper>
            <Header>My Skills</Header>
            <ContentWrapper>
            <SkillHex />
            </ContentWrapper>
        </ContainerWrapper>
    )
}

export default Skills;