import React from 'react';
import Separator from '../../common/separator';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import "./project.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Separator/>
      <label className='section-title'>Projects</label>
      <div className='project-box'>
           {data.map((project)=>{
             return <ProjectCard project={project}/>
           })}
      </div>
    </div>
  )
}

export default Projects