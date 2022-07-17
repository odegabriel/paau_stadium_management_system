import React, { Fragment, useState, useEffect } from 'react'
import paau from '../image/paau logo.png'
import '../App.css'
import axios from 'axios'
import { useMatch } from 'react-router-dom'

//remove regulators

const RegulatorsLogIn = () => {
    const [ submit, setSubmit] = useState('submit')
    const [email , setEmail] = useState()
    const [password, setPassword] = useState()

    const nav = useMatch()

    useEffect(() => {
      if(submit === 'processing.'){
        axios.post('http://localhost:3002/regulators/login',
        {
            email : email,
            password : password
        })
        .then((res=> nav(`/regulator/${res.data._id}`) ))
        .catch(e => console.log(e))
      }
    
    }, [submit])
    
  return (
    <Fragment>
        <div className='background'>
            <form>
                <div className='shadow-lg  bg-body rounded form-setting'>
            <div className='logo'>
                    <img src={paau} style={{width:'80px', height:'80px'}} className='logo' alt='paau logo' />
                </div>
                <div>
            <div>
                <label >Email Address</label>
            </div>
            <div>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='' />
            </div>
            <div>
                <label >Password</label>
            </div>
            <div>
                <input type='password'  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='' />
            </div>
            </div>
            <div>
                <button className='btn btn-primary' onClick={()=> setSubmit('processing')}>{submit}</button>
            </div>
            
        </div>
            </form>
            </div>
    </Fragment>
  )
}

export default RegulatorsLogIn