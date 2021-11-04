import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

const Logo = styled.h4`
  font-size: 3.5vh;
  filter: drop-shadow(3px 3px 0px #f27127);
`;

const IconWrapper = styled.div`
    margin: 3%;
`;

const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export default function Footer() {
    return (
      <footer className='main'>
      <Logo>V </Logo>
      <Icons>
        <IconWrapper className='icon center'>
          <Image 
            src='/images/linkedin.png'
            width={32}
            height={32}
            alt='link to viet nguyen linkedinx'
          />
        </IconWrapper>
        <IconWrapper className='icon center'>
          <Image 
            src='/images/github.png'
            width={32}
            height={32}
            alt='link to viet nguyen github'
          />
        </IconWrapper>
        <IconWrapper className='icon center'>
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

