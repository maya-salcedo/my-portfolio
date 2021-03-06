import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CarouselWrapper from './HomeCarousel';

const HomeWrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1591548745205-001fd9ef73f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  margin: 0;
  max-width: 100%;
`;

const Header = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  padding-top: 40vh;
  margin: 0 auto;
  text-shadow: 0 0 10px #865858, 2px 2px 3px rgba(236, 223, 200, 0.05);
  ${(props) =>
    props.mobile &&
    css`
      padding-top: 20vh;
    `}
`;

const Ruler = styled.hr`
  width: 30%;
  margin: 0 auto 0 auto;
`;

const Home = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 850);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 850);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <HomeWrapper id="home">
      {isDesktop ? (
        <Header>I'm Maya Salcedo</Header>
      ) : (
        <Header mobile>I am</Header>
      )}
      {isDesktop && <Ruler />}
      <CarouselWrapper />
    </HomeWrapper>
  );
};

export default Home;
