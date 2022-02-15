import { ReactElement, useEffect, useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import styles from "../styles/Entrance.module.scss";
import Divider from "./Divider";

export interface project {
    name:string,
    html_url:string,
    description:string
}

export default function Projects({}) {
    const [projects, setProjects] = useState<project[]>([]);

    useEffect(() => {
        getProjects();
    }, [])
    
    async function getProjects() {
        const res = await (await fetch("https://api.github.com/users/thijnvdb/repos")).json();
        setProjects(res);
    }
    

    return (<>
        <Divider title="side_projects"/>
        <div className={"grid gap-8 w-5/6 mx-auto auto-rows-max sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " + styles.wrapper}>
            {
                projects.map((project,i) => <a key={"project"+i} href={project.html_url} className={"container transition-all hover:scale-105 bg-theme-muted-800 hover:bg-theme-muted-700 w-full col-span-1 shadow-md row-span-1 rounded p-4 transitions-all " + styles.enter}>
                    <h1 className="text-theme-secondary-400 font-bold text-2xl">{project.name}</h1>
                    <p className="text-theme-muted-400 font-semibold">{project.description || "no description provided"}</p>
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