import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [option, setOption] = useState('')
  const [code, setCode] = useState('')

  //For first name
  function handleFname(event){
    setFname(event.target.value)
  }

  //For last name
  function handleLname(event){
    setLname(event.target.value)
  }

  //For date of birth
  function handleDob(event){
    setDob(event.target.value)
  }

  //For email
  function handleEmail(event){
    setEmail(event.target.value)
  }

  //For phone
  function handlePhone(event){
    setPhone(event.target.value)
  }

  //For Address
  function handleAddress(event){
    setAddress(event.target.value)
  }

  //For select
  function handleSelect(event){
    setOption(event.target.value)
  }

  //For ZipCode
  function handleZipcode(event){
    setCode(event.target.value)
  }

  //For display in console
  function display(){
    console.log(fname,lname,dob,email,phone,address,option,code)
  }

  //For Submit
  function handleSubmit(event){
    event.preventDefault()
  }

  //For Reset the form
  function handleReset(){
    setFname('')
    setLname('')
    setDob('')
    setEmail('')
    setPhone('')
    setAddress('')
    setCode('')
    setOption('')
  }
  return (
    <>
      <div className="container">
        <h1 className='text-center'>React Task 2</h1>
        <div className="container border border-1 border-dark rounded-1 mt-4 pb-3 pt-3 ps-4 formwidth">
            <h2 className='text-center'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
            <div className="container mt-4">
                <label htmlFor="fname">Full name:</label>
                <input type="text" placeholder='First name' id='fname' className='mx-5 ps-2' value={fname} onChange={handleFname}/>
                <input type="text" placeholder='Last name' id="fname" className='ps-2' value={lname} onChange={handleLname}/>
            </div>
            <div className="container mt-4">
                <label htmlFor="dob">DOB:</label>
                <input type="date" placeholder='mm/dd/yyyy' id='dob' className='ps-2 date' value={dob} onChange={handleDob}/>
            </div>
            <div className="container mt-4">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Enter your email' id='email' className='ps-2 email' value={email} onChange={handleEmail}/>
            </div>
            <div className="container mt-4">
                <label htmlFor="phone">Phone<br/>Number:</label>
                <input type="number" placeholder='+91 ##########' min="0" id='phone' className='ps-2 phone' value={phone} onChange={handlePhone}/>
            </div>
            <div className="container mt-4">
                <label className='me-5'>Favorite<br/>Language:</label>
                <label htmlFor="html" className='me-2'>HTML</label>
                <input type="checkbox" id='html' className='me-5'/>
                <label htmlFor="css" className='me-2'>CSS</label>
                <input type="checkbox" id='css' className='me-5'/>
                <label htmlFor="javaScript" className='me-2'>JavaScript</label>
                <input type="checkbox" id='javaScript' className='me-5'/>
            </div>
            <div className="container mt-4">
                <label htmlFor="address" className='me-2 tranform'>Address:</label>
                <textarea id="address" cols="56" rows="5" className='ms-5 ps-2' value={address} onChange={handleAddress}></textarea>
            </div>
            <div className='container mt-4'>
              <label htmlFor="select" className='me-2'>Select your<br/>State:</label>
              <select id="select" className='select ps-1' value={option} onChange={handleSelect}>
                <option value="Select_State">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="UP">UP</option>
                <option value="Haryana">Haryana</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>
            <div className="container mt-4">
                <label htmlFor="zip" className='zip'>Zip code:</label>
                <input type="number" placeholder='zipcode' min="0" id='zip' className='ps-2 ms-2 phone' value={code} onChange={handleZipcode}/>
            </div>
            <div className="container text-center mt-4">
                <button className='btn btn-primary me-3 ' type='submit'>Submit</button>
                <button className='btn btn-primary px-3 ' type='button' onClick={handleReset}>Reset</button>
                <button className='btn btn-primary ms-3 ' type='button' onClick={display}>Display in console</button>
            </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Form
