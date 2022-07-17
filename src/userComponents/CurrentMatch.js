//current match

import React, {useEffect, useState} from 'react'
import '../App.css'
import MatchElement1 from './MatchElement1'
import axios from 'axios'
import im from '../image/icons8-next-page-64.png'
import io from '../image/icons8-pre-page-64.png'
import paau from '../image/paau logo.png'


const CurrentMatch = () => {

  const [num, setNum] = useState(0)
  const [element, setElement] = useState('')



  useEffect(() => {
    axios.get("http://localhost:3002/admin/getmatch")
        .then(res => 
          {
                 console.log(res)
                let t = res.data.filter((e,i)=> {if(i === num){return e}})
                setElement(t.map((e,i) => <MatchElement1 key={i} first={e.firstTeam} second={e.secondTeam}
             date={e.date} time={e.time} stadium={e.stadium} _id={e._id}
             />))
          })
        .catch(e => console.log(e))
  
    return () => {
      
    }
  }, [num])
  

  return (
    <div className='stadium' >
      <div style={{backgroundColor : "white"}} className='reg1' >
        
          <h2 className="text">PRINCE ABUBAKAR AUDU UNIVERSITY STADIUM MANAGMENT SYSTEM</h2>
        
      </div>
      <div className='flip'>
      <div className='reg gapping' >
          <div className=''>
            <a href='/login'><button className='btn btn-primary btn-sm'>sigIn</button></a>
          </div>
          <div>
            <a href='/registration'><button className='btn btn-primary btn-sm'>signup</button></a>
          </div>
      </div>
      <div className='shadow-lg  bg-body rounded match' >
        <div ><button onClick={()=> {setNum(prev => prev - 1)
          if (num === 0 || num < 0) {
            setNum(0)
          }
          }} className='btn btn-link'><img src={io} alt='backward' className='img' /></button></div>
        <div className='get fold'>
        <div className=''>
            <div className='fw-bolder text2' >UPCOMING_FIX_MATCHES</div>
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
    </div>
    
  )
}

export default CurrentMatch