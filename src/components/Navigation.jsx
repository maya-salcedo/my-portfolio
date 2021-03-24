import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: no-wrap;
  justify-content: center;
  width: 100%;
  padding: 2%;
  height: 2rem;
  background-color: #f3f4ed;
  > li {
    list-style: none;
    text-align: right;
    padding: 1%;
    font-size: 100%;
    cursor: pointer;
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
        <li onClick={handleClick} className="nav-link" link="work">Work</li>
        <li onClick={handleClick} className="nav-link" link="contact">Contact</li>
      </NavigationWrapper>
  );
}

export default Navigation;