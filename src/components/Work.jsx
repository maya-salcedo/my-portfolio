import React from 'react';
import styled from 'styled-components';
import myInvitation from '../image/invitation-img.PNG';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
  background-color: #f6f5f5;
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


const Content = styled.a`
  text-align: center;
  padding: 5% 10% 0;
  width: 25rem;
  height: auto;
`;

const ImageWrapper = styled.img`
  width: 25rem;
  height: 100%;
  border: auto;
  padding: 2% 5%;
  margin: 1rem;
  @media(max-width: 1028px) {
    width: 15rem;
    height: 100%;
    }
`;

const Work = () => {
  return (
    <ContainerWrapper id="work">
      <Header>My Work</Header>
      <ContentWrapper>
        <Content href="https://www.emanueleandmayawedding.com/">https://www.emanueleandmayawedding.com/</Content>
        <ImageWrapper src={myInvitation} alt="invitation-img" />
        <p></p>
      </ContentWrapper>
    </ContainerWrapper>
  )
}

export default Work;