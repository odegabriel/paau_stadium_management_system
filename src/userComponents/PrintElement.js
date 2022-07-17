import React from 'react'
import '../App.css'

const PrintElement = ({date, firstTeam, secondTeam, sitNo, stadium, time, userId, ticket, price}) => {
  
  let ticketNo = userId.toString();
   let y =  ticketNo.split('')
   let elements = '' 
    y.forEach(element => {
        if (element.match(/[0-9]/)) {
          elements += element
        } 
    });
    let output = elements.toLocaleString();
    // console.log(output)
  
  
  return (
    <div >
      <div>
       <div  style={{textAlign:"center"}}>
          <h3>Prince Abubakar Audu Stadium Management System</h3>
        </div>
      </div>
    <div style={{display:"flex",gap:"20px",flexDirection:"column", justifyContent:"center", alignItems: 'center'}} >
    <div className='shadow-lg  bg-body rounded mainTicket'>
            {/* {date}
            {firstTeam}
            {secondTeam}
            {sitNo}
            {stadium}
            {time}
            {userId}
            {ticket} */}
            <div className='subTicket'>
                <div>
                    <p className='text2'>Ticket Number : {output}</p>
                </div>
                <div>
                  <p className='text2'>DATE : {date}</p>
                </div>
                <div>
                  <p className='text2'>TIME : {time}</p>
                </div>
                <div>
                  <p className='text2'>SEAT : {sitNo}</p>
                </div>
                <div>
                  <p className='text2'>PRICE : {price}</p>
                </div>
            </div>
            <div className='subTicket1' >
              <div>
              <p className='text2'>MATCH OF THE DAY</p>
              </div>
              <div  className=' sub1'>
                <div  className='text-warning text1 ' >
                    {firstTeam}
                </div>
                <div className='text2' >
                  <p>VS</p>
                </div>
                <div className='text-danger text1' >
                  {secondTeam}
                </div>
              </div>
              <div>
                <p className='text2'>{stadium}</p>
              </div>
            </div>
    </div>
    <div>
    <div ><button className='btn btn-primary btn-sm'>Print</button></div>

    </div>
    </div>
    </div>
  )
}

export default PrintElement

