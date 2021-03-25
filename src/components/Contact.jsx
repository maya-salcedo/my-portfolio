import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
  background-color: #f3f4ed;
  height: 35rem;
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  padding: 5% 5% 0 5%;
  margin: 0;
`;

const ContentWrapper = styled.div`
  justify-content: center;
  > li {
    list-style: none;
    text-align: center;
    padding: 2%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  padding: 3% 10%;
  width: 12rem;
  height: auto;
  margin: auto;
  > a {
    list-style: none;
    text-align: center;
    padding: 2%;
    font-size: 300%;
    margin: auto;
  }
`;

const Contact = () => {
  return (
    <ContainerWrapper id="contact">
      <Header>Contact me</Header>
      <ContentWrapper>
        <li>maya.salcedo07@gmail.com</li>
        <Content>
          <a href="https://www.linkedin.com/in/mayasalcedo/" target="_blank" style={{ color: '#046582' }}><FontAwesomeIcon icon={faLinkedin} className="icon" /> </a>
          <a href="https://github.com/maya-salcedo" target="_blank" style={{ color: '#393232' }}> <FontAwesomeIcon icon={faGithub} className="icon" /> </a>
        </Content>
      </ContentWrapper>
    </ContainerWrapper>
  )
}

export default Contact;