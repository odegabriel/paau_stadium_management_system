//admin homepage
import axios from 'axios'
import '../App.css'
import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../adminComponents/Nav'
import { Link, useMatch } from 'react-router-dom'
// import fan from 'https://res.cloudinary.com/dvxfph8qu/image/upload/v1636861447/sample.jpg'

const AdminHomePage = () => {

  const [res, setAdmin] = useState()
  const [info, setInfo] = useState()
  const[reg, setReg] = useState()
  const [user,setUsers] = useState()
  

  const match = useMatch('/admin/home/:id')

  useEffect(() => {
    axios.get(`http://localhost:3002/admin/home/${match.params.id}`)
    .then(res => setAdmin(res.data.email))
    .catch(e=> console.log(e))
  
    return () => {
      
    }
  }, [])
  
  useEffect(() => {
    axios.get('http://localhost:3002/admin/getusers')
    .then(res => setUsers(res.data.length))
    .catch(e => console.log(e))
  
    return () => {
     
    }
  }, [])
  

  useEffect(() => {
    axios.get('http://localhost:3002/admin/allregulators')
    .then(res => setReg(res.data.length))
    .catch(e => console.log(e))
  
    return () => {
      }
  }, [])
  
  // useEffect(() => {
  //   axios.get('http://localhost:3002/admin/getusers')
  //   .then(res => setInfo(res.data.length))
  //   .catch(e => console.log(e))
  //   return () => {
  //   }
  // }, [])

  // const CLOUDINARY_URL='https://res.cloudinary.com/demo/image/upload/e_hue/white_chicken.jpg'

  // useEffect(() => {
  //   axios.get(CLOUDINARY_URL)
  //   .then(res => console.log(res))
  //   .catch(e => console.log(e))
  
  // }, [])
  
  


  return (
      <Fragment>
        


          {/* <div  className='nav border-top-0 shadow-lg  bg-body rounded'  >
              <div className=''   >
                
                </div> 
                <div >
                <p>{res}nam</p>
                </div>           
              </div> */}
            {/* <img src={fan} alt='cloud'  /> */}
            <div className='all'>
              <div className='header'>
                <div>
                  <img alt='logo' src='' />
                </div>
                <div>
                  admin
                </div>
                <div>
                  data
                  {res}
                </div>
              </div>
              <div  className='admin3 shadow-lg  bg-body rounded'>
              
              <div className='admin1'>
                  <div className='admin'>
                      <div className='items'>
                        number of regulators{reg} 
                      </div>
                      <div className='items'>
                        number of registered users{user} 
                      </div>
                      <div className='items'>
                        categories
                      </div>
                  </div>
                  <div className='admin'>
                      <div className='items1'>
                        user
                      </div>
                      <div className='admin1'>
                        
                      <div className='admin'>
                        <div className='items'>
                          <Link to='/admin/registerregulator'>addRegulators</Link>                          
                        </div>
                        <div className='items'>
                          <Link to='/admin/addmatch'>addmatch</Link>
                        </div>
                        <div className='items'>
                          <Link to=''>create privilage</Link>
                        </div>
                        <div className='items'>
                          <Link to=''>updatematch</Link>
                        </div>
                      </div>
                     <div className='admin'>
                     <div className='items'>
                        <Link to=''>checkbookings</Link>
                      </div>
                      <div className='items'>
                        <Link to=''>add categories</Link>
                      </div>
                      <div className='items'>
                        <Link to=''>view/ delete checkers</Link>
                      </div>
                      <div className='items'>
                        <Link to=''>update categories</Link>
                      </div>
                     </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </Fragment>
    
  )
}

export default AdminHomePage


