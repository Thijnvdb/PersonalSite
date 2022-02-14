import Image from 'next/image'
import React from 'react'
import Divider from './Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links() {
    const links = [
        {name:"GitHub",link:"https://github.com/Thijnvdb", icon:faGithub},
        {name:"LinkedIn",link:"https://www.linkedin.com/in/thijn-van-den-bergh-4617a6197/",icon: faLinkedin}
    ];

    return (
        <>
        <Divider title={"links"}/>
        <div className='grid gap-8 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded w-5/6 items-center justify-center'>
        {
            links.map((e,i) => (
            <a href={e.link} className='cursor-pointer row-span-1 col-span-1 transition-all hover:scale-105 duration-300 rounded-xl h-32 flex justify-evenly bg-theme-primary-900 hover:bg-theme-primary-800 items-center'>
                <FontAwesomeIcon className='text-theme-primary-300 ml-8' size={"6x"} icon={e.icon}/>
                <span className='text-center mr-8 text-xl font-semibold text-theme-primary-50'>
                {e.name}
                </span>
            </a>
            ))
        }
        </div>
        </>
    )
}
