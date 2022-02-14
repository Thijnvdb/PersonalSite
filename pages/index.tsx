import React, { ReactElement } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import LandingLayout from '../layouts/LandingLayout'
import Image from 'next/image';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Divider from '../components/Divider';
import Links from '../components/Links';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <>
    <a id="page"/>
    <Links/>
    <Projects/>
    <Skills/>
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