import React, { ReactElement } from 'react'
import LandingLayout from '../layouts/LandingLayout'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Links from '../components/Links';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <>
    <a id="page"/>
    <Links/>
    <Skills/>
    <Projects/>
    <Contact/>
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