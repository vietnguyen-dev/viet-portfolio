import React from 'react'
import styled from 'styled-components'

const SkillList = styled.div`
  padding: 5% 1% 5% 5%;

  @media only screen and (min-width: 1000px) {
    padding: 2% 1% 2% 2%;
  }
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15%;

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3%;
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 0%;
  }
`;

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
            {/* <SkillMarker>Jest</SkillMarker> */}
            <SkillMarker>SASS</SkillMarker>
            <SkillMarker>Bootstrap</SkillMarker>
            <SkillMarker>NPM</SkillMarker>
            {/* <SkillMarker>Firebase</SkillMarker> */}
            <SkillMarker>Adobe XD</SkillMarker>
            <SkillMarker>Basecamp</SkillMarker>
            <SkillMarker>Slack</SkillMarker>
            <SkillMarker>Zoom</SkillMarker>
          </SkillsContainer>
        </SkillList>
      </div>
    );
}
