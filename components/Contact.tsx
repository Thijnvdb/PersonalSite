import React from 'react'
import Divider from './Divider'
import style from "../styles/Contact.module.scss";
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    return (<>
        <Divider title="contact"/>
        <div className='w-5/6 flex items-center flex-col'>
            <a className={style.link} href="mailto:thijnvandenbergh@gmail.com"><FontAwesomeIcon className='h-8' icon={faAt}/> <span className='mx-auto'>Thijnvandenbergh@gmail.com</span></a>
            <a className={style.link} href="tel:+31636589487"><FontAwesomeIcon className='h-8' icon={faPhone}/>  <span className='mx-auto'>+31 6 365 89 487</span></a>
        </div>
    </>)
}
