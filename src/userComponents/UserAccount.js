
//indivigual User Account match

import React, {useEffect, useState} from 'react'
import '../App.css'
import MatchElement from './MatchElement'
import axios from 'axios'
import im from '../image/icons8-next-page-64.png'
import io from '../image/icons8-pre-page-64.png'
import { useMatch, useNavigate } from 'react-router-dom'
import paau from '../image/paau logo.png'


const UserAccount = () => {

  const [num, setNum] = useState(0)
  const [element, setElement] = useState('')
  const [details, setDetails] = useState()

  //const nav = useNavigate()
  const match = useMatch('/:id')

  useEffect(() => {
    axios.get(`http://localhost:3002/user/${match.params.id}`)
    .then(res => { console.log(res.data.email);setDetails(res.data.email);
    } )
    .catch(e => console.log('error'))
  
  }, [])
  



  useEffect(() => {
    axios.get("http://localhost:3002/admin/getmatch")
        .then(res => 
          {
               console.log(res)
                let t = res.data.filter((e,i)=> {if(i === num){return e}})
                setElement(t.map((e,i) => <MatchElement key={i} first={e.firstTeam} id={match.params.id}  second={e.secondTeam}
             date={e.date} time={e.time} stadium={e.stadium} _id={e._id}
             />))
          })
        .catch(e => console.log(e))
  
    return () => {
      
    }
  }, [num])
  

  return (
    
    <div className='stadium' >
      <div className='user' >
        <div  className=''>
          <img alt='logo' src={paau} className='photo'/>
        </div>
        <div style={{display: "flex", flexDirection :"row", gap:"20px"}}>
        <div>
          
          {details}
        </div>
        <div>
          <button className='btn btn-danger btn-sm'>logout</button>
        </div>
        </div>
        
      </div>
   
    <div className='shadow-lg  bg-body rounded match' >
     
      <div ><button onClick={()=> {setNum(prev => prev - 1)
        if (num === 0 || num < 0) {
          setNum(0)
        }
        }} className='btn btn-link'><img src={io} alt='backward' className='img'/></button></div>
      <div className='fold' >
      <div>
          <div className='fw-bolder text2'>UPCOMING_FIX_MATCHES</div>
      </div>
      <div>
        {element}
      </div>
      </div>
      <div ><button onClick={()=> {setNum(prev => prev + 1)}} className='btn btn-link'>
        <img src={im} alt='forward' className='img'/>
        </button></div>
  </div>
  </div>
  
  )
}

export default UserAccount


