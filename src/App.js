import './App.css'
import Form from './Components/Form';
import React, {useState} from 'react';

function App() {
  const [form, setForm] = useState(true)
  const [msg, setMsg] = useState('')
cl
  //Login form
  function handleForm(){
    if(form==false){
      setForm(true)
      setMsg('Login form shows successfully')
    }
  }

  //Registration form
  function handleForm1(){
    if(form==true){
      setForm(false)
      setMsg('Registration form shows successfully')
    }
  }
  return (
     <>
     
    <div className='container d-flex justify-content-evenly'>
      <div className='mt-5'>
        <button onClick={handleForm} className='btn btn-success mx-4 px-4'>Click for Login form</button>
        <button onClick={handleForm1} className='btn btn-primary'>Click for Registeration form</button>
        <h4 className='mt-5 pt-5 ms-4 text-primary'>{msg}</h4>
      </div>
      <div>
        <Form form={form}/>
      </div>
    </div>
    
     </>
  )
}

export default App;
