import {useState} from 'react'
import styled from 'styled-components'

const NavItems = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #04212d;
  height: 100vh;
  width: 40vw;
  margin: 0;
  padding: 8%;
  z-index: 50;
  text-align: right;

  @media only screen and (min-width: 600px){
    display: grid;
    grid-template-columns: repeat( 4, 1fr);
    position: static;
    height: 3vh;
    width: 80vw;
    padding: 2% 1%;
    background-color: #012E40;
  }
  
  @media only screen and (min-width: 800px){
    
  }
`;

const NavItem = styled.li`
    margin-top: 15%;
    font-size: 3vh;
    letter-spacing: 3px;

    :after{
      display: block;
      content: '';
      border-bottom: 2px solid #f27127;
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
    }

    :hover:after{
      transform: scaleX(1);
    }

    @media only screen and (min-width: 600px){
      margin: 2% 3%;
      font-size: 2vh;
      text-align: center;
    }


`

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  position: sticky;
  top: 0%;
  
  padding: 8%;
  z-index: 100;
  background-color: #012e40;

  @media only screen and (min-width: 600px){
    grid-template-columns: 10% 90%;
    padding: 4% 10%;
    opacity: .9;
  }
  
  @media only screen and (min-width: 800px){
    
  }
`;

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
        <ToggleOn className='icon show' onClick={settingNav}>...</ToggleOn>
          <NavItems className={nav ? 'show' : 'hide'}>
            <ToggleOff onClick={settingNav} className={'show'}>X</ToggleOff>
            <NavItem>
              <a href="#skills"onClick={settingNav}>
                SKILLS
              </a>
            </NavItem>
            <NavItem>PROJECTS</NavItem>
            <NavItem>CONTACT</NavItem>
            <NavItem>ABOUT</NavItem>
          </NavItems>
      </NavBar>
    );
}
