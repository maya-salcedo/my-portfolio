import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  > button {
    font-size: 3rem;
    padding: 0.2rem 0.5rem;
    margin: 0 0.5rem;
    background: none;
    color: #ffffff;
    cursor: pointer;
    border: none;
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
  background-color: #f3f4ed;
  z-index: 3;
  > li {
    list-style: none;
    text-align: right;
    padding: 0 2%;
    font-size: 100%;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 0.5% 3%;
    }
    @media (max-width: 507px) {
      padding: 0.6% 1.4% 0.6% 1%;
    }
    @media (max-width: 411px) {
      padding: 1.6% 1.4% 1.5% 1%;
    }
    @media (max-width: 383px) {
      padding: 2% 1.4% 2% 1%;
      font-size: 90%;
    }
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
    <header>
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
        </HamburgerWrapper>
      )}
      <aside className={sidebarIsOpen ? 'open' : ''}>
        <ul onClick={() => setSidebarIsOpen(false)}>
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
        </ul>
      </aside>
    </header>
  );
};

export default Navigation;
