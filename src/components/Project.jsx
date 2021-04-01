import React from 'react';
import styled from 'styled-components';
import '../elements/ProjectCarousel.css';
import Header from '../elements/Header';
import ProjectCarousel from './ProjectCarousel';

 /* eslint-disable */ 

const ContainerWrapper = styled.div`
  background-color: #f3f4ed;
  margin: 0;
  padding: 1% 5% 10%;
  height: 100%;
  @media(max-width: 1418px){
    padding: 5% 5%;
  }
`;



const Project = () => {
  return (
    <ContainerWrapper id="project">
      <Header>My Projects</Header>
      <ProjectCarousel />
    </ContainerWrapper>
  )
}

export default Project;