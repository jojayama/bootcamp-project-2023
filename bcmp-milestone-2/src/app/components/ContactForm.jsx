import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '@/styles/contactForm.module.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let message = document.getElementById('inputMessage').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name === '' || email === '' || message === '') {
        alert("All fields must be filled out");
        return;
    }

    emailjs.sendForm('service_o0dt2vz', 'template_lkfq5l7', form.current, '5Fj_-omo7Fpo8AJgSEW-l')
      .then((result) => {
          console.log("Email sent:", result.text);
          document.getElementById('inputName').value = '';
          document.getElementById('inputEmail').value = '';
          document.getElementById('inputMessage').value = '';
      }, (error) => {
          console.log("Send email error:", error.text);
      });
};

  return (
    <main>
        <h1 className="page-title">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        Name: <input className = {style.input} type={style.text}/>
            Email:  <input className = {style.input} type={style.email}/>
            Message: <input className = {style.input} type={style.textarea}/>
            <input className = {style.input} type="submit"/>
        </form>
    </main>
  );
};