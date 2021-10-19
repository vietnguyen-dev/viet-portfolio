import React from 'react'
import styled from 'styled-components'

const SkillList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15%;
    padding: 5% 0% 5% 5%;
`

const SkillMarker = styled.li`
  ::marker {
    color: #f27127;
  }
`;

export default function Skills() {
    return (
      <div id='skills'>
        <h3>SKILLS</h3>
        <SkillList>
          <div>
            <ul>
              <SkillMarker>JavaScript ES6</SkillMarker>
              <SkillMarker>React</SkillMarker>
              <SkillMarker>Redux</SkillMarker>
              <SkillMarker>Next.js</SkillMarker>
              <SkillMarker>Three.js</SkillMarker>
            </ul>
          </div>
          <div>
            <ul>
              <SkillMarker>Jest</SkillMarker>
              <SkillMarker>SASS</SkillMarker>
              <SkillMarker>NPM</SkillMarker>
              <SkillMarker>Firebase</SkillMarker>
            </ul>
          </div>
        </SkillList>
      </div>
    );
}
