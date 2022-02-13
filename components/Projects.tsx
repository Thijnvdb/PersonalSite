import { ReactElement, useEffect, useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import styles from "../styles/Projects.module.scss";

interface project {
    name:string,
    url:string
}

export default function Projects({}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, [])
    
    async function getProjects() {
        const res: Set<project> = await (await fetch("https://api.github.com/users/thijnvdb/repos")).json();
        console.log(res);
        setProjects(res);
    }
    

    return (<>
        <h1 className='divider'>Projects</h1>
        <div className={"grid gap-8 w-5/6 mx-auto mt-10 auto-rows-max sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " + styles.wrapper}>
            {
                projects.map((project,i) => <a key={"project"+i} href={project.html_url} className={"container transition-all hover:scale-105 bg-theme-muted-700 hover:bg-theme-muted-800 w-full col-span-1 row-span-1 rounded p-4 transitions-all " + styles.project}>
                    <h1 className="text-theme-muted-50 font-bold text-2xl">{project.name}</h1>
                    <p className="text-theme-muted-400">{project.description || "no description provided"}</p>
                </a>)
            }
        </div>
    </>)
}

Projects.getLayout = (page: ReactElement) => {
    return <DefaultLayout>
        {page}
    </DefaultLayout>
}