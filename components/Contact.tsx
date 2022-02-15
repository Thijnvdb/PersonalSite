import React from 'react'
import Divider from './Divider'
import style from "../styles/Contact.module.scss";

export default function Contact() {
    return (<>
        <Divider title="contact"/>
        <div className='w-5/6 flex items-center flex-col'>
            <a className={style.link} href="mailto:thijnvandenbergh@gmail.com">Thijnvandenbergh@gmail.com</a>
            <a className={style.link} href="tel:+31636589487">+31 6 365 89 487</a>
        </div>
    </>)
}
