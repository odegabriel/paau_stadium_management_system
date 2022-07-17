//view and delete
//delete route  /admin/:id/regulator

import Element from './elements/ViewReg'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const ViewDeleteReg = () => {

    const [regulators, setRegulator] = useState('') 

    useEffect(() => {
      axios.get('http://localhost:3002/admin/allregulators')
           .then(res =>
            { 
               console.log(res.data)
               setRegulator(res.data.map(e =>  
               <Element firstName={e.name.firstName} 
                        lastName={e.name.lastName} 
                        email={e.email}
                        _id={e._id} 
                />))
            })
           .catch(e => console.log(e))
    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        {regulators}
    </div>
  )
}

export default ViewDeleteReg


        
