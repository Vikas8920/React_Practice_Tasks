import React, { useState } from 'react'

const LoginForm = () => {
  document.title='ShopC-Login'

  const [input, setInput1] = useState({})

  const handleInput = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setInput1({...input,[name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault
      console.log('submit')
      console.log(input)
  }
  
  return (
    <>
    <div className="container mt-4">
      <h1 className='text-center'>Login Here to go into your account!!!</h1>
    </div>
       <div className='container mt-5 d-flex justify-content-center'>
        <form className='border border-1 border-dark rounded-1 p-4' onSubmit={handleSubmit}>
            <h2 className='text-center'>Login Form</h2>
           <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="username" className='me-5'>Username:</label>
                <input type="text" name='name' value={input.name} onChange={handleInput} id='username' placeholder='Enter Username' className='ps-2'/>
            </div>
            <div className="container mt-4 d-flex justify-content-center">
                <label htmlFor="password" className='me-4 ps-1'>Password:</label>
                <input type="password" name='password' value={input.password} onChange={handleInput} id='password' placeholder='Enter Password' className='ms-4 ps-2'/>
            </div>
            <div className="container mt-4">
               <button type='submit' className='btn btn-primary px-4'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
