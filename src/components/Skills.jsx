import React from 'react';
import styled from 'styled-components';
import SkillLogos from './SkillLogos';
import Header from '../elements/SectionWrapper';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
`;

const ContentWrapper = styled.div`
  margin: 0;
  padding: 1% 5% 2%;
  height: 100vh;
  @media(max-width: 1066px){
    height: 100%;
    padding: 5% 5%;
  }
`;



const Skills = () => {
    return(
        <ContainerWrapper id="skills">
            <Header>My Skills</Header>
            <ContentWrapper>
            <SkillLogos />
            </ContentWrapper>
        </ContainerWrapper>
    )
}

export default Skills;