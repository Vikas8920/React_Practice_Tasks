import React, { useState } from 'react'

const Signin = () => {
  document.title='ShopC-Signin'

  const [input, setInput] = useState({}) 
  const handleInput = (event) =>{
    const name = event.target.value
    const value = event.target.value
    setInput({...input,[name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault
      console.log('submit')
      console.log(input)
  }
  return (
    <>
    <div className="container mt-4">
      <h1 className='text-center'>Register Here to open your account!!!</h1>
    </div>
      <div className='container mt-5 d-flex justify-content-center'>
        <form className='border border-1 border-dark rounded-1 p-4' onSubmit={handleSubmit}>
            <h2 className='text-center'>Registration Form</h2>
            <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="username" className='me-5'>Username:</label>
                <input type="text" id='username' name='name' value={input.name} onChange={handleInput} placeholder='Enter Username' className='ps-2'/>
            </div>
            <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="email" className='me-5 ps-2'>Email:</label>
                <input type="email" id='email'  name='email' value={input.email} onChange={handleInput} placeholder='Enter Email' className='ms-4 ps-2'/>
            </div>
            <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="password" className='me-4 ps-1'>Password:</label>
                <input type="password" id='password' name='password' value={input.password} onChange={handleInput} placeholder='Enter Password' className='ms-4 ps-2'/>
            </div>
            <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="cpassword" className='me-4 ps-1'>Confirm<br/>Password:</label>
                <input type="password" id='cpassword' name='cpassword' value={input.cpassword} onChange={handleInput} placeholder='Enter Confirm Password' className='ms-4 ps-2'/>
            </div>
            <div className="container mt-4">
               <button type='submit' className='btn btn-primary px-4'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Signin
