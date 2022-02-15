import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function LandingNavigation() {
    const [visible, setVisible] = useState<Boolean>(false);
    let tag = "text-theme-muted-100 p-3 rounded-2xl text-xl hover:scale-105 transition-all";
    if (!visible) tag += " opacity-75 hover:opacity-100"

    function onScroll() {
        let vis = window.scrollY >= window.innerHeight * 0.94;
        setVisible(vis);
    }

    useEffect(()=> {
        document.addEventListener('scroll', onScroll);
    },[])

    return (
        <nav className={`w-[100vw] z-50 h-[8vh] fixed top-0 left-0 flex items-center justify-center duration-200 transition-all ${visible && 'bg-theme-muted-900 shadow-lg'}`}>
            <Link href="#links">
                <a className={tag}>Links</a>
            </Link>
            <Link href="#side_projects">
                <a className={tag}>Projects</a>
            </Link>
            <Link href="#skills">
                <a className={tag}>Skills</a>
            </Link>
            <Link href="#contact">
                <a className={tag}>Contact</a>
            </Link>
        </nav>
    )
}
