import React from 'react';
import myPicture from '../image/profile-img.jpg';
import {ContainerWrapper, Header, ContentWrapper, Content, TextWrapper, ImageWrapper} from '../elements/SectionWrapper';



const About = () => {

    return(
        <ContainerWrapper id="about">
          <Header>About me</Header>
          <ContentWrapper>
            <Content>
            <TextWrapper>
            I'm obsessed with creating things and making it better. When I discovered that I can build awesome things with coding, I couldn't stop thinking and wishing to have more time to get my hands on the keyboard. My current goal is to work with a great team to learn more and build better web apps.
            </TextWrapper>
            <TextWrapper>
            I am located in Vihti, Finland. I have a degree in BS Nursing from Philippines and completed 150 credits in BS International Businees in Arcada UAS. Currently I am working as a nurse but I become so passionate about coding that I code everyday and I see myself doing this kind of work. 
            </TextWrapper>
            </Content>
            <ImageWrapper src={myPicture} alt="profile-img"/>
          </ContentWrapper>
        </ContainerWrapper>
    )
}

export default About;