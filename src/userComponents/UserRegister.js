

//register users


import paau from '../image/paau logo.png'
import React,{Fragment, useState, useContext, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'


const UserRegister = () => {
    //input states
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [ age, setAge] = useState()
    const [dateOfBirth, setDateOfBirth] =useState()
    const [phoneNo, setPhoneNo] = useState()
    const [submit, setSubmit] = useState('submit')
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [check,setCheck] = useState()
    //forms states

    const nav = useNavigate()

useEffect(() => {
    if (submit === 'processing.') {
        axios.post(`http://localhost:3002/user/createaccount`,
        {
          firstName: firstName,
          lastName : lastName,
          email: email,
          phoneNo: phoneNo,
          age: age,
          password : password,
          dateOfBirth: dateOfBirth
        })
        .then(()=> nav('/login'))
        .catch(e => console.log(e))
    }

}, [submit])

    const handleText =(e)=>
    {
        let {value, name} = e.target
        switch (name) {
            case 'firstName':
                setFirstName(value)
                break;
            case "lastName" :
                setLastName(value)
                break;
            case 'age' :
                setAge(value)
                break;
            case 'email' :
                setEmail(value)
                break;
            case 'dateOfBirth' :
                setDateOfBirth(value)
                break;
            case 'phoneNo' :
                setPhoneNo(value)
                break;
        
            default:
                break;
        }

    }
    
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
        
    const newLook =()=>
    {
        setUserFrom
        (
            <div className='form'>
            <form onSubmit={(e)=> e.preventDefault()}>
               <div className='shadow-lg  bg-body rounded formInside'>
                   <div>
                   <div>
                    <label  className='form-label'>Password</label>
                </div>
                <div>
                    <input type='password' className='form-control' onChange={(e)=>{setPassword(e.target.value);console.log(e.target.value)}} value={password}  />
                </div>
                <div>
                    <label className='form-label'>Confirm Password</label>
                </div>
                
                <div>
                    {check}
                    <input type='password' className='form-control' onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                        if (password !== confirmPassword) {
                            setCheck('password is not correct')
                        }
                        }} value={password}  />
                        <p>{check}</p>
                </div>
                   </div>
                
                <div>
                    <button className='btn btn-primary' onClick={handleSubmit}>{submit}</button>
                </div>
               </div>
                
            </form>
            </div>
        )
    }

    const [userForm,setUserFrom] = useState
    (
    <div className='form'>
    <form  >
        <div className='shadow-lg  bg-body rounded formInside'>
            <div className='logo'>
                <img src={paau} style={{width:'80px', height:'80px'}} className='logo' alt='paau logo' />
            </div>
            <div>
                <div>
                    <label className='form-label' htmlFor='Name'> First Name</label>
                </div>
                 <div>
                    <input name='firstName' type='text' onChange={handleText} className='form-control' value={firstName} placeholder='' />
                 </div>
                 <div>
                 <label className='form-label' htmlFor='Name'> Last Name</label>
                 </div>
                 <div>
                 <input name='lastName' type='text' onChange={handleText} className='form-control' value={lastName} placeholder='' />
                </div>
                <div>
                <label htmlFor='email address' className='form-label'> Email Address</label>
                </div>
                <div>
                <input name='email' type='email' onChange={handleText} value={email}  className='form-control'/>
                </div>
                <div>
                <label htmlFor='age' className='form-label' > Age</label>
                </div>
                <div>
                <input type='number' name='age' value={age} onChange={handleText} className='form-control'/>
                </div>
                <div>
                 <label htmlFor='Date of Birth' className='form-label'> Date of Birth</label>
                 </div>
                 <div>
                 <input type='date' name='dateOfBirth' value={dateOfBirth} onChange={handleText} className='form-control'/>
                 </div>
                 <div>
                 <label htmlFor='Phone Number' className='form-label'> Phone Number</label>
                 </div>
                 <div>
                 <input type='number' name='phoneNo' value={phoneNo} onChange={handleText} className='form-control' />
                 </div>
                 </div>
                 <div>
                 <button onClick={newLook} className='btn btn-primary'>Next</button>
                 </div>
                 <div style={{fontSize:'12px'}}>
                 <a href='/login'><p>Already Signed Up click to Login</p></a>
                 </div>
                 </div>
</form>
</div>
)
    



    

    return (
    <Fragment>
        <div className='background'>

                        
            {userForm}
            
            
        </div>
    </Fragment>
  )
}

export default UserRegister


// import React,{useState} from 'react'


// const UserRegister = () => {
//     const [password, setPassword] =useState()
//     const [name, setName] = useState()
//     const [ compo, setCompo] = useState(
//     <div>
//         <div>
//         <label>name</label>
//         <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        
//     </div>
//     </div>)

//   return (
//     <div>
//         {compo}
//         <button onClick={()=>setCompo(
//             <div>
           
//         <label>password</label>
//         <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} />
             
//             </div>

//         )}>next</button>
        
//     </div>
//   )
// }


// export default UserRegister