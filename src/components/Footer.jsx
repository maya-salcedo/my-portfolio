import React from 'react';
import styled from 'styled-components';



const FooterWrapper = styled.footer`
  text-align: left;
`;

const Footer = () => {
  return(
    <div>
      <FooterWrapper>
        <p>Copyright © Maya Salcedo 2021</p>
      </FooterWrapper>
    </div>
  )
}

export default Footer;