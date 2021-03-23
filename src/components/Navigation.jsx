import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";


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
  }
   
`;

const Navigation = () => {
  return(
    <HashRouter>
      <NavigationWrapper>
      <li><NavLink className="nav-link" to="/">Home</NavLink></li>
      <li><NavLink className="nav-link" to="/about">About</NavLink></li>
      <li><NavLink className="nav-link" to="/work">Work</NavLink></li>
      <li><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
      <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
    </NavigationWrapper>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
    </HashRouter>
    
  );
}

export default Navigation;