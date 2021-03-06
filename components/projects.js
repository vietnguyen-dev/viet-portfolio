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
    github: "https://github.com/vietnguyen-dev/rick-and-morty-api",
    live: "https://upbeat-hawking-1cb3cf.netlify.app/",
    page: "/rick-morty",
  },

  {
    id: 1,
    title: `Pho Gia (Milwaukie)`,
    description: `Pho Gia had no online prescene. I was tasked with creating one for them`,
    img: `/images/pho-gia.png`,
    height: 540,
    width: 970,
    github: "https://github.com/vietnguyen-dev/pho-gia2",
    live: "https://phogiamilwaukie.com",
    page: "/pho-gia",
  },
  {
    id: 2,
    title: `Notes`,
    description: `I use the IOS notes app alot on my apple devices so I decided to create a similar one for my desktop`,
    img: `/images/notes.png`,
    height: 540,
    width: 970,
    github: "https://github.com/vietnguyen-dev/notes",
    live: "https://cranky-hypatia-7bab66.netlify.app/",
    page: "/notes",
  },
];

export default function Projects() {
    return (
        <div id='projects' className='main'>
            <h3>PROJECTS</h3>
            <div className="project-container">
            {projects.map(project =>
                <Project 
                    key ={project.id}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    height={project.height}
                    width={project.width}
                    github={project.github}
                    live={project.live}
                    page={project.page}
                />
            )}
            </div>
        </div>
    )
}
