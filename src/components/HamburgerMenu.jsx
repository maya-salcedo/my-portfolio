import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  width: 10rem;
  height: 22rem;
  background-color: #efefef;
  z-index: 1000;
  transition: all 0.5s;
  transform: translateX(0);
  > ul {
    padding: 0 0.5rem;
    list-style: none;
    > li {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      text-decoration: none;
      color: #204051;
      font-family: 'Playfair Display SC', serif;
      cursor: pointer;
      &:hover {
        color: #151515;
        border-radius: 3px;
        background: #ffffff;
      }
    }
  }
`;

const ButtonWrapper = styled.button`
  color: #204051;
  border: none;
  background: none;
  padding: 0.5rem 2rem;
  font-size: 1.4rem;
  cursor: pointer;
`;

const HamburgerMenu = ({ setSidebarIsOpen }) => {
  const handleClick = (e) => {
    const linkTo = e.target.getAttribute('link');
    document.getElementById(linkTo).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MenuWrapper>
      <ul onClick={() => setSidebarIsOpen(false)}>
        <ButtonWrapper type="button" className="close-icon">
          <FontAwesomeIcon icon={faTimes} />
        </ButtonWrapper>

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
