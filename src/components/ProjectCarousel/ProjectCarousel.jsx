import React from 'react';
import styled from 'styled-components';
import listOfProjects from '../../data/listOfProjects.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 /* eslint-disable */ 

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
`;

const ImagewithATagWrapper = styled.div`
  width: 30rem;
  height: 100%;
  border: auto;
  padding: 2% 2%;
  margin: 1rem;
  @media(max-width: 700px){
    width: 15rem;
    padding: 5% 5%;
  }
`;
const Content = styled.div`
  text-align: left;
  padding: 3% 2%;
  width: 30rem;
  height: auto;
  @media(max-width: 724px){
    padding: 5% 7%;
  }
`;

const ImageWrapper = styled.img`
  width: 30rem;
  height: 100%;
  border: auto;
  text-align: center;
  @media(max-width: 700px){
    width: 15rem;
  }
`;

const ProjectTitle = styled.p`
  font-weight: 800;
  font-size: larger;
  text-align: center;
`;

const TextWrapper = styled.p`
  line-height: 160%;
`;

const LinkWrapper = styled.p`
  word-break: break-all;
  text-align: center;
  padding-bottom: 2%;
`;

const ProjectCarousel = () => (
  <Carousel useKeyboardArrows showThumbs={false} interval={20000} transitionTime={1000} showArrows={false}>
    {listOfProjects.map((project) => {
      return(
      <ContentWrapper key={project.nameOfProject}>
        <ImagewithATagWrapper>
          <a href={project?.projectUrl} target="_blank"><ImageWrapper src={project?.imageOfproject} alt={project?.nameOfProject} /></a>
        </ImagewithATagWrapper>
        <Content>
          <ProjectTitle>{project?.nameOfProject}</ProjectTitle>
          <a href={project?.projectUrl} target="_blank"><LinkWrapper>{project?.projectUrl}</LinkWrapper></a>
          <TextWrapper>
          {project?.description1}
          </TextWrapper>
          <TextWrapper>
          {project?.description2}
          </TextWrapper>
          <TextWrapper>Check out the code in Github. Click <a href={project?.gitHubURL}  target="_blank">here</a>.</TextWrapper>
        </Content>  
      </ContentWrapper>
    )
    })}
  </Carousel>
);

export default ProjectCarousel;