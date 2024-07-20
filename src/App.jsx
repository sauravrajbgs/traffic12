import React, { useRef } from'react';
import emailjs from '@emailjs/browser';

import './App.css';




export default function App() {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      
      alert("Email sent sucessfully !");
     
  emailjs.sendForm('service_dgtchtu', 'template_6b3uk1d', form.current,  'yWPQzVuSmlJCWb-zp',
        )
        .then(
          (result) => {
            console.log(result.text);
           
           
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
   
    <>
    
    <section id='contactPage'>
    <div id='contact'>
            <h1 className='clientPageTitle'>Complaint form</h1>
            <span className='contactDesc'>please fill out the form to make a complaint regarding your issue</span>
           <form className='form'ref={form} onSubmit={sendEmail}>
           <input type='text'className='name'placeholder=' your name' name='from_name'/>
                <input type='text'className='fatherName'placeholder=' your fathersName' name='from_fathername'/>
                <input type='number'className='contact'placeholder=' your ContactNumber' name='from_contactnumber'/>
                <input type='email'className='email'placeholder=' your email' name='from_email'/>
                <input type='text' className="Address" placeholder='currentAdd' name='from_currentaddress'/>
                <textarea className='msg' name='from_message'rows='5'placeholder='your message'/>
                <button type='submit'value='send' className='submitBtn' >submit</button>
           </form>
               


    </div>
    
    </section>
   
    </>
   
  )
}



  

