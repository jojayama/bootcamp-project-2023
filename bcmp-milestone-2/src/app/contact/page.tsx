import React from 'react';
import style from './contact.module.css'

export default function Home() {
    return (<main>
        <h1 className="page-title">Contact Me</h1>
        <form id="contact-form">
        Name: <input className = {style.input} type={style.text}/>
            Email:  <input className = {style.input} type={style.email}/>
            Message: <input className = {style.input} type={style.textarea}/>
            <input className = {style.input} type="submit"/>
        </form>
    </main>
    )
}