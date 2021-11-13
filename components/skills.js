import React from 'react'
import styled from 'styled-components'

const SkillList = styled.div`
    padding: 5% 1% 5% 5%;
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15%;

  @media only screen and (min-width: 800px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5%;
  
  }
`

const SkillMarker = styled.li`
  font-size: 2.5vh;
  ::marker {
    color: #f27127;
  }
`;

export default function Skills() {
    return (
      <div id="skills" className="main">
        <h3>SKILLS</h3>
        <SkillList>
          <SkillsContainer>
            <SkillMarker>JavaScript</SkillMarker>
            <SkillMarker>React</SkillMarker>
            <SkillMarker>Redux</SkillMarker>
            <SkillMarker>Three.js</SkillMarker>
            <SkillMarker>Next.js</SkillMarker>
            <SkillMarker>Jest</SkillMarker>
            <SkillMarker>SASS</SkillMarker>
            <SkillMarker>NPM</SkillMarker>
            <SkillMarker>Firebase</SkillMarker>
          </SkillsContainer>
        </SkillList>
      </div>
    );
}
