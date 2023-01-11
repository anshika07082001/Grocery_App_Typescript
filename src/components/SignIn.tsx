import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

const SignHandler=()=>{
    
}

  return (
    <div className='col-12'>
        <div className='col-6 m-auto d-flex flex-column p-2 border mt-5 mb-5 rounded'>
            <h1 className='p-3 text-center'>Sign In</h1>
            <label >Full Name</label>
            <input className='rounded border p-2 border-secondary border-1 ' />
            <label >Email or Phone Number</label>
            <input className='rounded border p-2 border-secondary border-1 '/>
            <label >Password</label>
            <input className='rounded border p-2 border-secondary border-1 '  type='password'/>
            <Link to='/login' className='text-center pt-2 fs-5'>Login</Link>
            <button className='rounded border p-2 border-secondary border-1 mt-2 bg-success text-white fs-4' onClick={SignHandler}>Sign In</button>
        </div>
    </div>
  )
}

export default SignIn