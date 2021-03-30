import React from 'react';
import styled from 'styled-components';
import weddingInvitation from '../image/invitation-img.PNG';
import offlineDictionary from '../image/offlineDictionary-img.PNG';
import Header from '../elements/SectionWrapper';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 /* eslint-disable */ 

const ContainerWrapper = styled.div`
  background-color: #f3f4ed;
  margin: 0;
  padding: 1% 5% 10%;
  height: 100vh;
  @media(max-width: 1418px){
    height: 100%;
    padding: 5% 5%;
  }
`;

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

const listOfProjects = [
  { 
    nameOfProject: "Wedding Invitation", 
    projectUrl: "https://www.emanueleandmayawedding.com/",
    imageOfproject: weddingInvitation,
    description1: "This project is an online wedding invitation that has RSVP feature where invited guests confirm their attendance through the website and the data is saved on the database. They will also get a confirmation email after sending their RSVP.",
    description2: "React, Node, Express, PostgreSQL, Nodemailer, Google API, Docker are among the technologies used in this project.",
    gitHubURL: "https://github.com/maya-salcedo/Wedding-Invitation-React"
  },
  {
    nameOfProject: "Offline Dictionary",
    projectUrl: "https://gofile.io/d/ud3MBM",
    imageOfproject: offlineDictionary,
    description1: "This is an offline English dictionary mobile application created using Kivy, an open source Python framework for rapid development of applications that make use of innovative user interfaces. Data are stored in a .json file so no internet connection is needed after downloading.",
    description2: "",
    gitHubURL: "https://github.com/maya-salcedo/offline-english-dictionary-kivy-app"
  }
] 

const Project = () => {
  return (
    <ContainerWrapper id="project">
      <Header>My Projects</Header>
      <Carousel useKeyboardArrows showThumbs >
      {listOfProjects.map((project, index) => {
        console.log(project.projectUrl);
        return(
        <ContentWrapper>
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
            
        
    </ContainerWrapper>
  )
}

export default Project;