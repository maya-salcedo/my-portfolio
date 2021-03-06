import React from 'react';
import styled from 'styled-components';
import './/ProjectCarousel/ProjectCarousel.css';
import Header from '../elements/Header';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';

const ContainerWrapper = styled.div`
  background-color: #e4e3e3;
  margin: 0;
  padding: 1% 5% 10%;
  height: 100%;
  @media (max-width: 1418px) {
    padding: 5% 5%;
  }
`;

const Project = () => (
  <ContainerWrapper id="project">
    <Header>My Projects</Header>
    <ProjectCarousel />
  </ContainerWrapper>
);

export default Project;
