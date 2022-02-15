import React from 'react'
import Divider from './Divider'
import { faDocker, faJava, faJs, faPython, faGitAlt, faCss3  } from '@fortawesome/free-brands-svg-icons'
import { faCubes, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/Entrance.module.scss";

export default function Skills() {
  //TODO: use api for this
  const skills = [
    {name:"C#", icon:faHashtag, subskills: [
      {name:"Entity Framework"},
      {name:".NET Core"},
    ]},
    {name:"Javascript", icon:faJs, subskills: [
      {name:"React.js"},
      {name:"Next.js"},
      {name:"Vue.js"},
      {name:"Node.js"}
    ]},
    {name:"Java", icon:faJava, subskills: [
      {name:"Spring"},
      {name:"Spring Kafka"},
      {name:"JPA"},
    ]},
    {name:"CSS", icon:faCss3, subskills: [
      {name:"Bootstrap"},
      {name:"Tailwindcss"},
      {name:"Sass"}
    ]},
    {name:"Python", icon:faPython, subskills: [
      {name:"Jupyter Notebooks"},
      {name:"Numpy"},
      {name:"Pandas"},
      {name:"PyPlot"}
    ]},
    {name:"Docker", icon:faDocker, subskills: [
      {name:"Docker-Compose"}
    ]},
    {name:"Git", icon:faGitAlt, subskills: []},
    {name:"Kubernetes", icon:faCubes, subskills: []},
  ]

  return ( 
    <>
        <Divider title='skills'/>
        <div className='grid gap-8 w-5/6 mx-auto auto-rows-max sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            skills.map(skill => <div className={'w-full h-36 grid grid-cols-3 grid-rows-1 px-8 py-6 bg-theme-muted-800 rounded-lg transition-all shadow-md ' + styles.enter}>
              <div className='col-span-2 h-full relative flex flex-col justify-between'>
                <h1 className='text-theme-secondary-400 font-bold text-xl'>{skill.name}</h1>
                <div className='h-full grid grid-cols-2 auto-rows-fr'>
                  {
                    skill.subskills && skill.subskills.map(sub => <span className='h-full font-semibold text-theme-muted-400'>
                      {sub.name}
                    </span>)
                  }
                </div>
              </div>
              <FontAwesomeIcon size='5x' className='col-span-1 h-full text-theme-secondary-400 m-auto' icon={skill.icon}/>
            </div>)
          }
        </div>
    </>
  )
}
