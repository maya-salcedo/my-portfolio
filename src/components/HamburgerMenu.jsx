import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = ({ setSidebarIsOpen }) => {
  const handleClick = (e) => {
    const linkTo = e.target.getAttribute('link');
    document.getElementById(linkTo).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <aside className="open">
      <ul onClick={() => setSidebarIsOpen(false)}>
        <li>
          <button className="close-sidebar" type="button">
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </button>
        </li>
        <li onClick={handleClick} className="nav-link-mobile" link="home">
          Home
        </li>
        <li onClick={handleClick} className="nav-link-mobile" link="about">
          About
        </li>
        <li onClick={handleClick} className="nav-link-mobile" link="project">
          Project
        </li>
        <li onClick={handleClick} className="nav-link-mobile" link="skills">
          Skills
        </li>
        <li onClick={handleClick} className="nav-link-mobile" link="contact">
          Contact
        </li>
      </ul>
    </aside>
  );
};

export default HamburgerMenu;
