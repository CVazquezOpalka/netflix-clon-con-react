import React from "react";
import styled from "styled-components";
import BackgroundImage from '../assets/NetflixFeatures.webp'

export const BackgroundImageLandingPage = () => {
  return <Container>
    <img src={BackgroundImage} alt="imagen de login" />
  </Container>;
};

const Container = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}
`;
