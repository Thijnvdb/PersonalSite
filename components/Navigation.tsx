import { CodeIcon, HomeIcon, QuestionMarkCircleIcon, SparklesIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, {ReactNode} from 'react';

interface NavigationProps {
    title?: string,
    children?: ReactNode,
    theme?: string
}

export default function Navigation({children, title, theme}: NavigationProps) {
    const atag = `flex justify-between items-center mx-2
    rounded px-2 py-1 cursor-pointer
    transition-colors
    `
    const icon = 'w-5 h-5 mr-2'

    return <nav className={"navigation z-30 h-16 w-full sticky top-0 shadow-xl items-center flex " + theme}>
        <Link href="/">
            <a className={atag + " ml-6"}><HomeIcon className={icon}/> Home</a>
        </Link>
        {/* <Link href="/projects">
            <a className={atag}><CodeIcon className={icon}/> Projects</a>
        </Link> */}
        <Link href="/contact">
            <a className={atag}><QuestionMarkCircleIcon className={icon}/> Contact</a>
        </Link>
    </nav>
}
