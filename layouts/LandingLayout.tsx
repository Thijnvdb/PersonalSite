import React, { ReactNode } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import LandingNavigation from '../components/LandingNavigation';


interface LandingProps {
    children?: ReactNode
    title?: string
}

export default function LandingLayout({children, title}: LandingProps) {
    return (
    <>
        <LandingNavigation/>
        <header className='relative h-screen bg-fixed bg-cover bg-forest bg-bottom w-full flex flex-col items-center justify-around'>
            <h1 className='text-theme-muted-100 text-6xl font-light z-20 ml-4'>{title}</h1>
            <span className='absolute mx-auto top-2/3 animate-bounce z-20'>
                <a href='#page'>
                    <ChevronDoubleDownIcon className='text-theme-muted-200 opacity-50 hover:opacity-100 h-12 w-12 hover:text-theme-muted-100 transition-all cursor-pointer'/>
                </a>
            </span>
            <div className='overlay absolute w-full h-full bg-gradient-to-r to-theme-primary-600 from-theme-secondary-600 z-10 mix-blend-soft-light'></div>
            <div className='overlay absolute w-full h-full z-10 bg-gradient-to-t from-theme-muted-900 mix-blend-multiply'></div>
        </header>
        <div className='w-full min-h-33vh flex flex-col items-center pb-32'>
            {children}
        </div>
    </>
  );
}
