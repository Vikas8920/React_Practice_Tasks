import React, { useState } from 'react'
import contact from './Assets/Images/contact.jpg'


const Contact = () => {
    document.title='ShopC-Contact'

    const [input, setInput] = useState({})

    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput({...input,[name]:value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('submit ')
        console.log(input)
    }
  return (
   <>
   <div className="container mt-4  bg-info p-4 rounded-3">
    <h1 className='text-center fw-bolder'>#let's talk</h1>
    <p className='text-center fw-bolder fs-4'>LEAVE A MESSAGE, We love to hear from you!</p>
   </div>

   <div className="container mt-4">
    <div className="row">
        <div className="col-md-6">
            <p>GET IN TOUCH</p>
            <h4 className='fw-bolder'>Visit one of our agency locations or contact us today</h4>
            <h5 className='mt-3'>Head Office</h5>
            <p><strong>Address:</strong> Devli, Ambedkar Nagar, South Delhi, Delhi</p>
            <p><strong>Email:</strong> contact@gmail.com</p>
            <p><strong>Mobile No.:</strong> +91 9999999999</p>
            <p><strong>Time:</strong> Monday to Saturday: 9:00am to 16:00pm</p>
        </div>
        <div className="col-md-6">
        <iframe className='shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0331867179984!2d77.22772947186232!3d28.508649236084477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19910f70daf%3A0xd4f6006390bd5e74!2sDeoli%20Rd%2C%20New%20Delhi%2C%20Delhi%20110062!5e0!3m2!1sen!2sin!4v1703427605040!5m2!1sen!2sin" width="560" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
   </div>

   <div className="container mt-4 border border-1 border-light shadow p-5">
   <div className="row ms-5">
    <div className="col-md-6">
        <p>LEAVE A MESSAGE</p>
        <h2 className='mb-4'>We love to hear from you</h2>
       <form action="" onSubmit={handleSubmit}>
       <input type="text" name='name' placeholder='Your name' value={input.name} onChange={handleInput} className='ps-2 mb-4' style={{width:'400px'}}/>
        <br />
        <input type="email" name='email' placeholder='E-mail' value={input.email} onChange={handleInput} className='ps-2 mb-4' style={{width:'400px'}} />
        <br />
        <input type="text" name='subject' placeholder='Subject' value={input.subject} onChange={handleInput} className='ps-2 mb-4' style={{width:'400px'}} />
        <br />
        <textarea name="message" id="" cols="50" rows="5" placeholder='Your Message' value={input.message} onChange={handleInput} className='ps-2 mb-4'></textarea>
        <br />
        <button className='btn btn-primary'>Submit</button>
       </form>
    </div>
    <div className="col-md-6 d-flex justify-center align-items-center ps-5">
        <img src={contact} alt="" width='400px'/>
    </div>
   </div>
   </div>
   </>
  )
}

export default Contact
