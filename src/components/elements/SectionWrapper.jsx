import React from 'react';
import styled from 'styled-components';

const StyledContainerWrapper = styled.section`
  margin: 0;
  padding: 1% 5% 2%;
  height: 100vh;
  @media(max-width: 1028px){
    height: 100%;
    padding: 5% 5%;
  }
`;

const StyledHeader = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  padding-top: 10vh;
  margin: 0;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
`;


const StyledContent = styled.div`
  text-align: left;
  padding: 3% 10%;
  width: 25rem;
  height: auto;
`;

const StyledTextWrapper =styled.p`
  line-height: 160%;
`;

const StyledImageWrapper = styled.img`
  width: 15rem;
  height: 100%;
  border: auto;
  padding: 2% 5%;
  margin: 1rem;
`;

const ContainerWrapper = ({children}) => <StyledContainerWrapper>{children}</StyledContainerWrapper>;
export const Header = ({children}) => <StyledHeader>{children}</StyledHeader>;
export const ContentWrapper = ({children}) => <StyledContentWrapper>{children}</StyledContentWrapper>;
export const Content = ({children}) => <StyledContent>{children}</StyledContent>;
export const TextWrapper = ({children}) => <StyledTextWrapper>{children}</StyledTextWrapper>;
export const ImageWrapper = ({children}) => <StyledImageWrapper>{children}</StyledImageWrapper>;

export default ContainerWrapper;