"use client";
import style from './contact.module.css'
import React, {useRef, useState} from 'react';
import emailjs from '@/app/api/';

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        console.log("pressed");
        e.preventDefault();
        const serviceId = 'service_o0dt2vz';
        const templateId = 'template_lkfq5l7';
        const publicKey = 'Z2O49Vmqr8s3Rpxkz';

        const templateParams = {
            from_name: name,
            message: message,
            reply_to: email,
        }

        emailjs.send( serviceId, templateId, templateParams, publicKey)
        .then((result) => {
            console.log(result.status);
            console.log(result.text);
            if(form.current){
                form.current.reset()
            }
            setName('');
            setMessage('');
            setEmail('');
        }, (error) => {
            console.log(error.text);
        });


    }
    return (<main>
        <h1 className={style.titleContact}>Contact Me</h1>
        <form id="contact-form" ref={form}>
        <p>Name: <input className = {style.textareaName} type={style.textareaName} onChange={(e) => setName(e.target.value)}/></p>
        <p>Email:  <input className = {style.textareaEmail} type={style.textareaEmail} onChange={(e) => setEmail(e.target.value)}/></p>
        <p>Message: <input className = {style.textareaMess} type={style.textareaMess} onChange={(e) => setMessage(e.target.value)}/></p>
            <input className = {style.input} type="submit" value= "Submit" onClick={sendEmail}/>
        </form>
    </main>
    )
}