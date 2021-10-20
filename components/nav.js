import {useState} from 'react'
import styled from 'styled-components'

const NavItems = styled.ul`
  list-style-type: none;
  position: absolute;
  right: 0;
  background-color: #04212d;
  height: 100vh;
  width: 50vw;
  padding: 8%;
  z-index: 100;
  text-align: right;
`;

const NavItem = styled.li`
    margin-top: 15%;
    font-size: 3vh;
`

const NavBar = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    margin: 7%;
`

const ToggleOn = styled.button`
    background-color: #012E40;
    color: white;
    border: 2px solid white;
    font-weight:bold;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;

const ToggleOff = styled.button`
  background-color: #04212d;
  color: white;
  border: none;
  font-size: 3vh;
`;

const Logo = styled.h5`
  font-size: 3.5vh;
  filter: drop-shadow(3px 3px 0px #f27127);
`;


export default function Nav() {
    const [nav, setNav] = useState(false)

    const settingNav = () => setNav(!nav)

    return (
      <NavBar>
        <Logo>V</Logo>
        {nav ? 
        <>
          <NavItems>
            <ToggleOff onClick={settingNav}>X</ToggleOff>
            <NavItem>
              <a href="#skills"onClick={settingNav}>
                SKILLS
              </a>
            </NavItem>
            <NavItem>PROJECTS</NavItem>
            <NavItem>CONTACT</NavItem>
            <NavItem>ABOUT</NavItem>
          </NavItems>
        </>
         : 
          <ToggleOn className='icon' onClick={settingNav}>...</ToggleOn>
        }
      </NavBar>
    );
}
