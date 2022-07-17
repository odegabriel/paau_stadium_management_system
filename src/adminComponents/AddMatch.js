//admin adding matchs 

import '../App.css'
import React, {Fragment, useState,  useEffect} from 'react'
import Logo from '../image/paau logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddMatch = () => {

   
    const [firstTeam, setFirst] = useState('')
    const [secondTeam, setSecond] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [venue, setVenue] = useState('')
    const [ submit, setSubmit] = useState('submit')
    const [price, setPrice] = useState('')
    const [firstTeamimage, setFirstImage ] = useState("")
    const [secondTeamImage, setSecondImage] = useState("")


    const nav = useNavigate()
    
    useEffect(() => {
      if (submit === 'processing.') {
        axios.post('http://localhost:3002/admin/addmatch', 
        {
            firstTeam: firstTeam,
            secondTeam: secondTeam,
            time: time,
            date: date,
            venue: venue,
            price : price,
            firstTeamimage : firstTeamimage,
            secondTeamImage : secondTeamImage
        })
        .then(res => 
            {
                console.log(res)
                nav('/admin/home/')
            })
        .catch(e => console.log(e))
      
      }
      return () => {
        
      }
    }, [submit])
    
    
    const handleSubmit =()=>
    {
        setSubmit('processing.')
    }

  return (
    <Fragment>
        <div className='background '>
        <div className='form'>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className='shadow-lg  bg-body rounded formInside'>
                <div>
                    <img src={Logo}  style={{width:'80px', height:'80px'}} alt='school logo' />
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
               
                <div>
                <div>
                    <label  className='form-label' htmlFor='first team' >First Team Name</label>
                </div>
                <div>
                    <input type='text' className='form-control' value={firstTeam} onChange={(e)=> setFirst(e.target.value)}  placeholder=''/>
                </div>
                <div>
                    <label  className='form-label' htmlFor='first team' >First Team ImageLink</label>
                </div>
                <div>
                    <input type='text' className='form-control' value={firstTeamimage} onChange={(e)=> setFirstImage(e.target.value)}  placeholder=''/>
                </div>
                <div>
                    <label className='form-label' htmlFor='second team' >Second Team Name</label>
                </div>
                <div>
                    <input type='text' value={secondTeam} className='form-control' onChange={(e)=>setSecond(e.target.value)} placeholder='' />
                </div>
                <div>
                    <label  className='form-label' htmlFor='first team' >Second Team ImageLink</label>
                </div>
                <div>
                    <input type='text' className='form-control' value={secondTeamImage}  onChange={(e)=> setSecondImage(e.target.value)}  placeholder=''/>
                </div>
                </div>
                <div>
                <div>
                    <label htmlFor='venue'  className='form-label'>Venue</label>
                </div>
                <div>
                    <input type='text' value={venue} onChange={(e)=> setVenue(e.target.value)} className='form-control' placeholder='' />
                </div>
                <div>
                    <label  className='form-label' htmlFor='time' >Time</label>
                </div>
                <div>
                    <input type='time' className='form-control' value={time} onChange={(e)=> {setTime(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='date'  className='form-label'>Date</label>
                </div>
                <div>
                    <input type='date' value={date} className='form-control' onChange={(e)=>{ setDate(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='date'  className='form-label'>Price</label>
                </div>
                <div>
                    <input type='number' value={price} className='form-control' onChange={(e)=>{ setPrice(e.target.value)}} />
                </div>
                </div>
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-primary'>{submit}</button>
                </div>
                </div>
                
            </form>
        </div>
        </div>
    </Fragment>
  )
}

export default AddMatch