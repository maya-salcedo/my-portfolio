import React from 'react';
import styled from 'styled-components';
import Header from '../elements/Header';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5%;
  height: 100vh;
  @media (max-width: 1066px) {
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

const TextWrapper = styled.p`
  line-height: 160%;
`;

const HighlightedText = styled.span`
  background-image: linear-gradient(#ffd900, #ffd900);
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 100% 2px;
  transition: background-size 0.5s, background-position 0.3s ease-in 0.5s;
  &:hover {
    background-size: 100% 100%;
    background-position: 0% 0%;
    transition: background-position 0.5s, background-size 0.3s ease-in 0.5s;
  }
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
          I'm obsessed with <HighlightedText>creating things</HighlightedText>{' '}
          and <HighlightedText>making them better</HighlightedText>. When I
          discovered that I can build awesome things with coding, I couldn't
          stop thinking and wishing to have more time to get my hands on the
          keyboard. My current goal is to work with a{' '}
          <HighlightedText>great team to learn more</HighlightedText> and{' '}
          <HighlightedText>build great products</HighlightedText>.
        </TextWrapper>
        <TextWrapper>
          I am located in Vihti, Finland. I have a degree in BS Nursing from the
          Philippines and completed 150 credits in BS International Business in
          Arcada UAS. As I become{' '}
          <HighlightedText>passionate about coding</HighlightedText>, I decided
          to significantly decrease my working hours as a nurse to{' '}
          <HighlightedText>pursue my passion</HighlightedText>.
        </TextWrapper>
      </Content>
      <ImageWrapper src="image/profile-img.jpg" alt="profile-img" />
    </ContentWrapper>
  </ContainerWrapper>
);

export default About;
