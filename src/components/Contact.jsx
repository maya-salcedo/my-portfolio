import React from 'react';
import styled from 'styled-components';
import Header from '../elements/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
 /* eslint-disable */ 

const ContainerWrapper = styled.div`
  margin: 0;
  padding: 1% 5% 2%;
  height: 100vh;
  background-color: #f3f4ed;
`;

const ContentWrapper = styled.div`
  justify-content: center;
  > a {
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

const Contact = () => (
    <ContainerWrapper id="contact">
      <Header>Contact me</Header>
      <ContentWrapper>
        <a href="mailto:maya.salcedo07@gmail.com"><p>maya.salcedo07@gmail.com</p></a>
        <Content>
          <a href="https://www.linkedin.com/in/mayasalcedo/" target="_blank" style={{ color: '#046582' }}><FontAwesomeIcon icon={faLinkedin} className="icon" /> </a>
          <a href="https://github.com/maya-salcedo" target="_blank" style={{ color: '#393232' }}> <FontAwesomeIcon icon={faGithub} className="icon" /> </a>
        </Content>
      </ContentWrapper>
    </ContainerWrapper>
);

export default Contact;