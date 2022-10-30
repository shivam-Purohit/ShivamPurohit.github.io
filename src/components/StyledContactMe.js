import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  './StyledContactMe.css'

function StyledContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_im3s5jv', 'template_xfmu8d8', form.current, 'oc-KvrNwiHFLJMfhE')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
       

           
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div>
          <form ref={form} onSubmit={sendEmail}>
            <h3 className='touch'>Get in touch</h3>
      <label>Name</label>
      <input type="text" name="user_name"  />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='button' type="submit" value="Send" />
    </form>
    </div>
  )

}

export default StyledContactMe
