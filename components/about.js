import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15%;
  overflow: hidden;
`;

const AboutContent = styled.div`
  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 60% 40%;
  }
`;

export default function About() {
    return (
      <div id="about" className="main">
        <h3>ABOUT </h3>
        <AboutContent>
          <div>
          <p>
            I am a recent graduate the CMDC Program at WSUV. I primarily am a
            developer but have skills in web design also.{" "}
          </p>
          <p>Interested in E-commerce and AR/VR development.</p>
          </div>
          <ImageDiv>
            <Image
              className="image"
              src="/images/nguyen_profile.png"
              width={100}
              height={100}
              alt="what I look like"
            />
          </ImageDiv>
         </AboutContent>
      </div>
    );
}
