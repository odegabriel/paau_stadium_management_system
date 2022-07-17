//admin login
import { Link, useNavigate, } from 'react-router-dom'
import React, { Fragment,useState, useEffect } from 'react'
import paau from '../image/paau logo.png'
import '../App.css'
import axios from 'axios'
import AdminHomePage from './AdminHomePage'

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState('Submit')
    
    

    

    const [man, setMan] = useState()
    const nav = useNavigate()
    
    useEffect(() => {
      if (submit === 'processing...') {
        axios.post('http://localhost:3002/admin/login', {
            email : email,
            password : password
        })
        .then((res)=> setTimeout(() => {
              nav(`/admin/home/${res.data._id}`)    
          }, 1000))
        .catch(()=> console.log('erro'))  
      }
         
      
    }, [submit])



    
  return (
    <Fragment>

        <div className='background' >
          <div className='form'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className=' shadow-lg  bg-body rounded formInside '>
                 <div  >
                     <img style={{width:'80px', height:'80px'}} src={paau} className='logo ' alt='paau logo' />
                </div>
                <div>
                
                <div>
                    <label className='form-label' htmlFor='Email Address'>Email Adddress</label>
                </div>
                <div >
                    <input type='email'  className='form-control' placeholder='Email Address' value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label  className='form-label' htmlFor='password'>Password</label>
                </div>
                <div >
                    <input type='password' className='form-control' placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
                </div>
                
                </div>
                
                <div >
                   <button className='btn btn-primary' onClick={()=> setSubmit('processing...')} >{submit}</button>
                </div>
                
            </div>
        </form>
        </div>
        </div>
    </Fragment>
  )
}

export default AdminLogin