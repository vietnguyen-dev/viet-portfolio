import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';

const ImageDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 15%;
   overflow: hidden;
   border-radius: 100%;
`

export default function About() {
    return (
      <div id="about">
        <h3>ABOUT </h3>
        <p>
          I am a recent graduate the CMDC Program at WSUV. I primarily am a
          developer but have skills in web design also. </p>
          <p>Interested in E-commerce
          and AR/VR development.
        </p>
        <ImageDiv>
            <Image src='/images/nguyen_profile.png' width={100} height={100} alt='what I look like' />
        </ImageDiv>
      </div>
    );
}
