import React, { ReactElement } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import LandingLayout from '../layouts/LandingLayout'
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import Image from 'next/image';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


export default function Home() {
  const test = [
    {name:"GitHub",link:"https://github.com/Thijnvdb", logo:github},
    {name:"LinkedIn",link:"https://www.linkedin.com/in/thijn-van-den-bergh-4617a6197/",logo:linkedin}
  ];

  return (
    <>
    <h1 className='divider'>Links</h1>
    <div className='grid gap-8 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded w-5/6 items-center justify-center'>
      {
        test.map((e,i) => (
          <a href={e.link} className='shadow-md cursor-pointer w-full row-span-1 p-16 hover:scale-105 col-span-1 bg-theme-primary-300 transition-all hover:bg-theme-primary-400 rounded h-32 flex justify-start items-center'>
            <Image className='z-10' height={100} width={100} src={e.logo}/>
            <span className='text-center ml-4 text-xl font-bold'>
              {e.name}
            </span>
          </a>
        ))
      }
    </div>
    <Projects/>
    <Skills/>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <LandingLayout title='Thijn van den Bergh'>
      {page}
    </LandingLayout>
  )
};