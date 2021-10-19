import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.h4`
  font-size: 3.5vh;
  filter: drop-shadow(2px 3px 0px #f27127);
`;

export default function Logo() {
    return <LogoStyle>V</LogoStyle>;
}
