import Image from 'next/image'
import React from 'react'
import Divider from './Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Links() {
    const links = [
        {name:"LinkedIn",link:"https://www.linkedin.com/in/thijn-van-den-bergh-4617a6197/",icon: faLinkedin},
        {name:"GitHub",link:"https://github.com/Thijnvdb", icon:faGithub},
        {name:"Website",link:"https://domeinvanthijn.nl", icon:faGlobe},
    ];

    return (
        <>
        <Divider title={"links"}/>
        <div className='grid gap-8 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded w-5/6 items-center justify-center'>
        {
            links.map((e,i) => (
            <a href={e.link} className='cursor-pointer row-span-1 col-span-1 transition-all 
            hover:scale-105 duration-300 rounded-xl h-32 flex justify-evenly items-center
            bg-theme-muted-800 shadow-md
            hover:hue-rotate-5 py-2
            '>
                <FontAwesomeIcon className='text-theme-secondary-400 opacity-75 h-full' size={"1x"} icon={e.icon}/>
                {/* <i className={`${e.icon.prefix} ${e.icon.iconName}`}></i> */}
                <span className='text-center mr-8 text-xl font-semibold text-theme-secondary-400 opacity-75'>
                {e.name}
                </span>
            </a>
            ))
        }
        </div>
        </>
    )
}
