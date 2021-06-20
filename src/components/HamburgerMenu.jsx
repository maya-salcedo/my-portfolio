import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuWrapper = styled.aside`
  position: fixed;
  width: 9rem;
  height: 23rem;
  background-color: #efefef;
  z-index: 1000;
  transition: all 0.5s;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(0);
  > ul {
    padding: 0;
    list-style: none;
    > button {
      border: none;
      padding: 0.3rem 0.8rem;
    }
    > li {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      text-decoration: none;
      color: #204051;
      font-family: 'Playfair Display SC', serif;
    }
  }
`;

const HamburgerMenu = ({ setSidebarIsOpen }) => {
  const handleClick = (e) => {
    const linkTo = e.target.getAttribute('link');
    document.getElementById(linkTo).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MenuWrapper>
      <ul onClick={() => setSidebarIsOpen(false)}>
        <li>
          <button type="button">
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </button>
        </li>
        <li onClick={handleClick} link="home">
          Home
        </li>
        <li onClick={handleClick} link="about">
          About
        </li>
        <li onClick={handleClick} link="project">
          Project
        </li>
        <li onClick={handleClick} link="skills">
          Skills
        </li>
        <li onClick={handleClick} link="contact">
          Contact
        </li>
      </ul>
    </MenuWrapper>
  );
};

export default HamburgerMenu;
