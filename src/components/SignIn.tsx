import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

type signUser={
  name:string,
  email:string,
  pwd:string,
}

type SignProps={
  signIn:signUser[],
  setsign:React.Dispatch<React.SetStateAction<[] | signUser[]>>,
}

const SignIn = (props:SignProps) => {
  var nameRef = useRef<HTMLInputElement>(null)
  var emailRef = useRef<HTMLInputElement>(null)
  var pwdRef = useRef<HTMLInputElement>(null)
  var navigate = useNavigate()

  // SignIn Function
  const SignHandler=()=>{
    if(nameRef.current!==null && emailRef.current!==null &&  pwdRef.current!==null){
      var obj  = {name:nameRef.current.value,email:emailRef.current.value,pwd:pwdRef.current.value}
      props.signIn.push(obj)
      props.setsign([...props.signIn])
      alert('Successfully signed In!!')
      if(nameRef.current!==null && emailRef.current!==null && pwdRef.current!==null){
        nameRef.current.value=''
        emailRef.current.value=''
        pwdRef.current.value=''
      }
      navigate('/login')
    }
    else{
      alert('Fill All Details carefully!!')
    }
  }

  return (
    <div className='col-12'>
        <div className='col-6 m-auto d-flex flex-column p-2 border mt-5 mb-5 rounded'>
            <h1 className='p-3 text-center'>Sign In</h1>
            <label >Full Name</label>
            <input className='rounded border p-2 border-secondary border-1' ref={nameRef} />
            <label >Enter Your Email Id</label>
            <input className='rounded border p-2 border-secondary border-1' ref={emailRef}/>
            <label >Password</label>
            <input className='rounded border p-2 border-secondary border-1'  type='password' ref={pwdRef}/>
            <button className='rounded border p-2 border-secondary border-1 mt-3 bg-success text-white fs-4' onClick={SignHandler}>Sign In</button>
        </div>
    </div>
  )
}

export default SignIn