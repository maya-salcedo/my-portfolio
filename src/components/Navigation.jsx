import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: no-wrap;
  justify-content: center;
  width: 100%;
  padding: 2%;
  height: 1.5rem;
  background-color: #f3f4ed;
  z-index: 3;
  @media(max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 4% 2%;
    height: 2rem;
    }
  > li {
    list-style: none;
    text-align: right;
    padding: 0 2%;
    font-size: 100%;
    cursor: pointer;
    @media(max-width: 768px) {
      padding: 0.5% 3%;
    }
    @media(max-width: 420px) {
      padding: 0.5% 1.6% 0.5% 1%;
    }
    @media(max-width: 336px) {
      padding: 1.5% 1.6% 1.2% 1%;
      font-size: 90%;
    }
  }
`;

const Navigation = () => {
  const handleClick = (e) => {
    const linkTo = e.target.getAttribute("link")
    document.getElementById(linkTo).scrollIntoView({ behavior: 'smooth' });
  }
  return (
      <NavigationWrapper>
        <li onClick={handleClick} className="nav-link"  link="home">Home</li>
        <li onClick={handleClick} className="nav-link" link="about">About</li>
        <li onClick={handleClick} className="nav-link" link="project">Project</li>
        <li onClick={handleClick} className="nav-link" link="skills">Skills</li>
        <li onClick={handleClick} className="nav-link" link="contact">Contact</li>
      </NavigationWrapper>
  );
}

export default Navigation;