import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from './HamburgerMenu';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const HamburgerWrapper = styled.div`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #204051;
  > button {
    font-size: 2rem;
    padding: 0.2rem 0.5rem;
    margin: 0 0.5rem;
    background: none;
    color: #ffffff;
    cursor: pointer;
    border: none;
  }
  > h2 {
    color: #ffffff;
    padding-right: 1rem;
    font-family: 'Merriweather', serif;
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: no-wrap;
  justify-content: center;
  width: 100%;
  padding: 2%;
  height: 1.5rem;
  background-color: #204051;
  > li {
    list-style: none;
    text-align: right;
    padding: 0 2%;
    font-size: 100%;
    cursor: pointer;
  }
`;

const Navigation = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 850);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const handleClick = (e) => {
    const linkTo = e.target.getAttribute('link');
    document.getElementById(linkTo).scrollIntoView({ behavior: 'smooth' });
  };
  const updateMedia = () => {
    setDesktop(window.innerWidth > 850);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <HeaderWrapper>
      {isDesktop && (
        <NavigationWrapper>
          <li onClick={handleClick} className="nav-link" link="home">
            Home
          </li>
          <li onClick={handleClick} className="nav-link" link="about">
            About
          </li>
          <li onClick={handleClick} className="nav-link" link="project">
            Project
          </li>
          <li onClick={handleClick} className="nav-link" link="skills">
            Skills
          </li>
          <li onClick={handleClick} className="nav-link" link="contact">
            Contact
          </li>
        </NavigationWrapper>
      )}
      {!isDesktop && (
        <HamburgerWrapper>
          <button type="button" onClick={() => setSidebarIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>

          <h2>Maya Salcedo</h2>
        </HamburgerWrapper>
      )}
      {sidebarIsOpen && <HamburgerMenu setSidebarIsOpen={setSidebarIsOpen} />}
    </HeaderWrapper>
  );
};

export default Navigation;
