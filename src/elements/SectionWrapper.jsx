import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1`
  font-weight: 400;
  font-size: 4rem;
  text-align: center;
  padding-top: 10vh;
  margin: 0;
`;

export const Header = ({children}) => <StyledHeader>{children}</StyledHeader>;

export default Header;