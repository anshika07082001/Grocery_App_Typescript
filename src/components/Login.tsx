import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

type Iuser={
  name:string,
  email:string,
  pwd:string,
}

type logUser={
  email:string,
  pwd:string
}

type LProps = {
  sign:Iuser[]
  logiN:logUser[],
  setlogin:React.Dispatch<React.SetStateAction<[] | logUser[]>>
}

const Login = (props:LProps) => {
  var emailRef = useRef<HTMLInputElement>(null)
  var pwdRef = useRef<HTMLInputElement>(null)
  var navigate = useNavigate()

  const loginHandler=()=>{
    if(emailRef.current!==null && pwdRef.current!==null){
      props.sign.map((item)=>{
        if(item.email==emailRef.current?.value && item.pwd==pwdRef.current?.value){
          var obj = {email:item.email,pwd:item.pwd}
          props.logiN.push(obj)
          props.setlogin([...props.logiN])
          alert('Login SuccessFully')
          navigate('/body')
        }
        else{
          alert('Details Not matched!!')
        }
      })
    }
    else{
      alert('fill Details')
    }
  }

  return (
    <div className='col-12'>
    <div className='col-6 m-auto d-flex flex-column p-2 border mt-5 mb-5 rounded'>
        <h1 className='p-3 text-center'>LogIn</h1>
        <label >Email or Phone Number</label>
        <input className='rounded border p-2 border-secondary border-1' ref={emailRef}/>
        <label >Password</label>
        <input className='rounded border p-2 border-secondary border-1' ref={pwdRef}  type='password'/>
        <button className='rounded border p-2 border-secondary border-1 mt-2 bg-success text-white fs-4' onClick={loginHandler}>Log In</button>
    </div>
</div>
  )
}

export default Login