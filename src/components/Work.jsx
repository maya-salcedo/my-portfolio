import React from 'react';
import styled from 'styled-components';
import myInvitation from '../image/invitation-img.PNG';
import Header from '../elements/SectionWrapper';
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
  padding: 2% 4%;
  margin: 1rem;
  @media(max-width: 700px){
    width: 15rem;
    padding: 5% 5%;
  }
`;
const Content = styled.div`
  text-align: left;
  padding: 3% 7%;
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

const TextWrapper = styled.p`
  line-height: 160%;
`;

const LinkWrapper = styled.p`
  word-break: break-all;
  text-align: center;
  padding-bottom: 2%;
`;

const Work = () => {
  return (
    <ContainerWrapper id="work">
      <Header>My Work</Header>
      <ContentWrapper>
      <ImagewithATagWrapper>
        <a href="https://www.emanueleandmayawedding.com/" target="_blank"><ImageWrapper src={myInvitation} alt="wedding-invitation"/></a>
      </ImagewithATagWrapper>
      

      <Content>
        <a href="https://www.emanueleandmayawedding.com/" target="_blank"><LinkWrapper>https://www.emanueleandmayawedding.com/</LinkWrapper></a>
        <TextWrapper>
        This project is an online wedding invitation that has RSVP feature where invited guests confirm their attendance through the website and the data is saved on the database. They will also get a confirmation email after they send their RSVP. 
        </TextWrapper>
        <TextWrapper>
        React, Node, Express, PostgreSQL, Nodemailer, Google API, Docker are among the technologies used in this project.
        </TextWrapper>
        <TextWrapper>Check out the code in Github. Click <a href="https://github.com/maya-salcedo/Wedding-Invitation-React"  target="_blank">here</a>.</TextWrapper>
        </Content>
        
      </ContentWrapper>      
        
    </ContainerWrapper>
  )
}

export default Work;