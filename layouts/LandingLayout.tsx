import Image from 'next/image';
import React, { ReactElement, ReactNode } from 'react';
import { HomeIcon, ChevronDoubleDownIcon, SparklesIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Navigation from '../components/Navigation';


interface LandingProps {
    children?: ReactNode
    image?: StaticImageData,
    title?: string
}

export default function LandingLayout({children, image, title}: LandingProps) {
    return (
    <>
        <header className='relative h-[66.6667vh] bg-fixed bg-cover bg-fog bg-bottom w-full flex flex-col items-center justify-around'>
            <h1 className='text-theme-primary-50 text-6xl font-light z-20'>{title}</h1>
            <span className='absolute mx-auto top-2/3 animate-bounce z-20'>
                <a href='#page'>
                    <ChevronDoubleDownIcon className='text-theme-primary-50 h-12 w-12 hover:text-theme-primary-400 transition-colors cursor-pointer'/>
                </a>
            </span>
            <div className='overlay absolute w-full h-full bg-gradient-to-r to-theme-primary-600 from-theme-secondary-600 z-10 mix-blend-soft-light'></div>
            <div className='overlay absolute w-full h-full z-10 bg-gradient-to-t from-theme-muted-900 mix-blend-multiply'></div>
        </header>
        <Navigation theme='muted'/>
        <a id="page"/>
        <div className='w-full min-h-33vh flex flex-col items-center pb-32'>
            {children}
        </div>
    </>
  );
}
