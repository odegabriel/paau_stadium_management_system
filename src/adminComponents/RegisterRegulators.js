//register regulator

import React,{Fragment, useState, useEffect} from 'react'
import paau from '../image/paau logo.png'
import axios from 'axios'
import '../App.css'

const RegisterRegulators = () => {

    const [submit, setSubmit] = useState('submit')
    const [firstName, setFirstName] = useState()
    const [ lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [Phone, setPhoneNo] = useState()
    const [age, setAge] = useState()
    const [ password, setPassword] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()

    useEffect(() => {
        if (submit === 'procesing') {
            
      axios.post('http://localhost:3002/admin/regiter/regulators',
      {
          firstName : firstName,
          lastName : lastName,
          email : email,
          Phone : Phone,
          age : age,
          password : password,
          dateOfBirth : dateOfBirth

      })
    
        }
      return () => {
        
      }
    }, [submit])
    

  return (
    <Fragment>
        <div className="background">
            <div className="form">
                
        <form onSubmit={(e)=> e.preventDefault()}>
        <div className='shadow-lg  bg-body rounded formInside'>
            <div>
                <img src={paau} alt='logo' style={{width:'80px', height:'80px'}} />
            </div>
            <div>
            <div >
                <label htmlFor='Name' className='form-label'>First Name</label>
            </div>
            <div >
                <input type='text' className='form-control' onChange={(e)=> {setFirstName(e.target.value)}} value={firstName} placeholder='' />
            </div>
            <div >
                <label className='form-label' htmlFor='Name'>Last Name</label>
            </div>
            <div >
                <input type='text' className='form-control' onChange={(e)=> {setLastName(e.target.value)}} value={lastName} placeholder='' />
            </div>
            <div >
                <label htmlFor='email address' className='form-label'> Email Address</label>
            </div>
            <div >
                <input className='form-control' type='text' value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder />
            </div>
            <div >
                <label htmlFor='age' className='form-label'> Age</label>
            </div>
            <div >
                <input type='text' className='form-control' value={age} onChange={(e)=> {setAge(e.target.value)}} placeholder />
            </div>
            
            <div >
                <label htmlFor='Phone Number' className='form-label'> Date Of Birth</label>
            </div>
            <div >
                <input type='text' className='form-control' value={dateOfBirth} onChange={(e)=> {setDateOfBirth(e.target.value)}} placeholder />
            </div>
            
            <div >
                <label htmlFor='Phone Number' className='form-label'> Phone Number</label>
            </div>
            <div >
                <input type='text' value={Phone} className='form-control' onChange={(e)=> {setPhoneNo(e.target.value)}} placeholder />
            </div>
            <div >
                <label htmlFor='Phone Number' className='form-label'> password</label>
            </div>
            <div >
                <input type='text' className='form-control' value={password} placeholder onChange={(e)=> {setPassword(e.target.value)}} />
            </div>
            </div>
            <div>
                <button onClick={()=> setSubmit('processing')} className='btn btn-primary'>{submit}</button>
            </div>
            </div>
            
            </form>
              
            </div>
        </div>    
        
    </Fragment>
  )
}

export default RegisterRegulators