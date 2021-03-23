import React from 'react';
import styled from 'styled-components';
import CarouselWrapper from './Carousel';



const HomeWrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1591548745205-001fd9ef73f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  height: 20rem;
  margin: 0;
`;

const Header = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  padding-top: 10rem;
  margin: 0 auto;
  text-shadow: 0 0 10px #865858, 2px 2px 3px rgba(236,223,200,0.05);
`;



const Ruler = styled.hr`
  width: 30%;
  margin: 0 auto 0 auto;

`;

const Home = () => {
  console.log("what is wrong");
  return(
    <HomeWrapper>
      <Header>I'm Maya Salcedo</Header>
      <Ruler />
      <CarouselWrapper />
    </HomeWrapper>
  );
}

export default Home;