import React,{Fragment,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const MatchElement = ({first, second, date, time, stadium,_id,id}) => {

  const [ticket, setTicket] = useState('BUY YOUR TICKET')
  const nav = useNavigate()

  useEffect(() => {
    if (ticket === 'processing.') {
    axios.post(`http://localhost:3002/user/${id}/tickets`,
    {
      firstTeam : first,
      secondTeam : second,
      stadium : stadium,
      time : time,
      date : date,
      userId : id
    })
      .then((res)=> {
      
        nav(`/${res.data._id}/ticket`)
      })
      .catch((e)=> console.log(e))
      // nav(`/${res.data._id}/ticket`)
      
    }
    
  }, [ticket])
  

  return (
    <Fragment>
      <div className='current0' >
        <div className='current1'>
          {/* <div>{id}</div> */}
            <div className='text-warning text1 '><u>{first}</u></div>
            <div className='text2' >vs</div>
            <div className='text-danger text1'><u>{second}</u></div>
        </div>
        <div className='text-danger text2' >{time};{date}</div>
        <div className='fst-italic text-dark text2'>@{stadium}</div>
        <div>
            <div>
              <button className='btn btn-danger btn-sm' onClick={()=> setTicket('processing.')}>{ticket}</button>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MatchElement