import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

const Logo = styled.h4`
  font-size: 3.5vh;
  filter: drop-shadow(3px 3px 0px #f27127);
`;

const IconWrapper = styled.div`
    margin: 5%;
`;

const Icons = styled.div`
    display: flex;
`

export default function Footer() {
    return (
      <footer>
      <Logo>V </Logo>
      <Icons>
        <IconWrapper>
          <Image 
            src='/images/linkedin.png'
            width={32}
            height={32}
            alt='link to viet nguyen linkedinx'
          />
        </IconWrapper>
        <IconWrapper>
          <Image 
            src='/images/github.png'
            width={32}
            height={32}
            alt='link to viet nguyen github'
          />
        </IconWrapper>
        <IconWrapper>
          <Image 
            src='/images/resume.png'
            width={32}
            height={32}
            alt='link to viet nguyen github'
          />
        </IconWrapper>
      </Icons>
      </footer>
    );
}

