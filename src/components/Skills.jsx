import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: #222831;
  font-weight: 600;
  font-size: 3rem;
  text-align: left;
  padding-top: 5rem;
`;

const Content = styled.p`
  text-align: left;
`;

const Skills = () => {
    return(
        <div>
            <Header>My Skills</Header>
            <Content>
                React
                Node
                Express
                Javascript
                CSS
                HTML
                PostgreSQL
            </Content>
        </div>
    )
}

export default Skills;