import React from 'react'
import Project from './project'

let projects = [
  {
    id: 0,
    title: `Rick and Morty Database`,
    description: `A database of Characters, Locations, and Episodes from the hit TV Show Rick and Morty. Built using React and the Rick and Morty API.`,
    img: `/images/rick-morty.png`,
    height: 540,
    width: 970,
    github: `https://github.com/vietnguyen-dev/rick-and-morty-api`,
    live: `https://upbeat-hawking-1cb3cf.netlify.app/`,
    page: '/rick-morty'
  },
];

export default function Projects() {
    return (
        <div id='projects'>
            <h3>PROJECTS</h3>
            {projects.map(project =>
                <Project 
                    key ={project.id}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    height={project.height}
                    width={project.width}
                />
            )}
        </div>
    )
}
