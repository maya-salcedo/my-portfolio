import React from 'react';
import styled from 'styled-components';
import myPicture from '../image/profile-img.jpg';
import Header from '../elements/Header';

const  ContainerWrapper = styled.div`
  margin: 0;
  padding: 1% 5% 5%;
  height: 100vh;
  @media(max-width: 1066px){
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

const Content = styled.div`
  text-align: left;
  padding: 3% 10%;
  width: 25rem;
  height: auto;
`;

const TextWrapper =styled.p`
  line-height: 160%;
`;

const ImageWrapper = styled.img`
  width: 15rem;
  height: 100%;
  border: auto;
  padding: 2% 5%;
  margin: 1rem;
`;

const About = () => (
    <ContainerWrapper id="about">
      <Header>About me</Header>
      <ContentWrapper>
        <Content>
          <TextWrapper>
          I'm obsessed with creating things and making it better. When I discovered that I can build awesome things with coding, I couldn't stop thinking and wishing to have more time to get my hands on the keyboard. My current goal is to work with a great team to learn more and build high quality web apps.
          </TextWrapper>
          <TextWrapper>
          I am located in Vihti, Finland. I have a degree in BS Nursing from Philippines and completed 150 credits in BS International Businees in Arcada UAS. Currently I am working as a nurse but I become so passionate about coding that I code everyday and I see myself doing this kind of work. 
          </TextWrapper>
        </Content>
        <ImageWrapper src={myPicture} alt="profile-img"/>
      </ContentWrapper>
    </ContainerWrapper>
);


export default About;