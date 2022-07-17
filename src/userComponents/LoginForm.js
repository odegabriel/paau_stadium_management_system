//users login

import React, {useState,useEffect} from 'react'
import paau from '../image/paau logo.png'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const LoginForm = () => {

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [submit, setSubmit] = useState('submit')
        const [err, setErro] = useState("")

        const nav = useNavigate()
        useEffect(() => {
          if(submit === 'processing.')
          {
              axios.post('http://localhost:3002/user/login', 
              {
                  email: email,
                  password: password
              })
              .then(res => setTimeout(() => {
                console.log(res)
                res.data._id? nav(`/${res.data._id}`) : setErro(res.data)
              }, 1000))
              .catch(e => console.log('error'))
          }
        
          return () => {
            
          }
        }, [submit])
        
        const handleSubmit =()=>
        {
            setInterval(() => {
                
            setTimeout(()=>
            {
                setSubmit('processing.')
            },1000)
            setTimeout(() => {
                setSubmit('processing..')
            }, 2000);
            setTimeout(() => {
                setSubmit('processing...')
            }, 3000);
            }, 3000);
        }
  return (
    <div className='background '>
        <div className='form'>
        
        <form onSubmit={(e)=> e.preventDefault()}>
            <div className='shadow-lg  bg-body rounded formInside'  >
                 <div className='logo'>
                    <img src={paau} style={{width:'80px', height:'80px'}} className='logo' alt='paau logo' />
                </div>
                <div>
                <div style={{color: "red"}}>
                    <p>{err}</p>
                </div>                
                <div>
                    <label className='form-label' htmlFor='Email Address'>Email Adddress</label>
                </div>
                <div >
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='form-control' />
                </div>
                <div>
                    <label className='form-label' htmlFor='password'>Password</label>
                </div>
                <div >
                    <input type='text' onChange={(e)=>setPassword(e.target.value)}  className='form-control' />
                </div>
                </div>
                
                <div >
                    <button onClick={handleSubmit} className='btn btn-primary btn-sm'>{submit}</button>
                </div>
                <div style={{fontSize:'12px'}}>
                    <a href='/registration'><p> click to SignUp</p></a>
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginForm