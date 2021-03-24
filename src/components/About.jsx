import React from 'react';
import styled from 'styled-components';
import myPicture from '../image/profile-img.jpg';

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
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
`;


const Content = styled.p`
  text-align: left;
  padding: 3% 10%;
  width: 25rem;
  height: auto;
`;

const ImageWrapper = styled.img`
  width: 15rem;
  height: 100%;
  border: auto;
  padding: 2% 5%;
  margin: 1rem;
`;

const About = () => {

    return(
        <ContainerWrapper id="about">
          <Header>About me</Header>
          <ContentWrapper>
            <Content>
            I'm obsessed with creating things and making it better. When I discovered that I can build awesome things with coding, I couldn't stop thinking and wishing to have more time to get my hands on the keyboard. My current goal is to work with a great team to learn more and build better web apps.
            </Content>
            <ImageWrapper src={myPicture} alt="profile-img"/>
          </ContentWrapper>
        </ContainerWrapper>
    )
}

export default About;