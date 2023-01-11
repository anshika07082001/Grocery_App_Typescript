import React from 'react'

const Login = () => {
  return (
    <div className='col-12'>
    <div className='col-6 m-auto d-flex flex-column p-2 border mt-5 mb-5 rounded'>
        <h1 className='p-3 text-center'>LogIn</h1>
        <label >Email or Phone Number</label>
        <input className='rounded border p-2 border-secondary border-1 '/>
        <label >Password</label>
        <input className='rounded border p-2 border-secondary border-1 '  type='password'/>
        <button className='rounded border p-2 border-secondary border-1 mt-2 bg-success text-white fs-4'>Log In</button>
    </div>
</div>
  )
}

export default Login