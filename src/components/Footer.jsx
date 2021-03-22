import React from 'react';
import styled from 'styled-components';



const FooterWrapper = styled.footer`
  text-align: center;
  color: #9e9d89;
`;

const Footer = () => {
  return(
    <div>
      <FooterWrapper>
        <p>Copyright © Maya Salcedo {new Date().getFullYear()}</p>
      </FooterWrapper>
    </div>
  )
}

export default Footer;