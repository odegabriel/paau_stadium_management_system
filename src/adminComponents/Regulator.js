import React, {useState, useEffect} from 'react'
import { Link, useMatch } from 'react-router-dom'
import axios from 'axios'
import Reg from './elements/Reg'

const Regulator = () => {
    

    const [element, setElement] = useState()
    const [reg, setReg] = useState()

    const id = useMatch('/admin/:id/regulator')
            
    useEffect(() => {
      axios.get(`http://localhost:3002/admin/${id.params.id}/regulator`)
        .then(res => 
            {           
               let t = res.data;
                setElement(<Reg firstName={t.name.firstName} 
                    lastName={t.name.lastName} age={t.age} dateOfBirth={t.dateOfBirth}
                    email={t.email} phoneNo={t.phoneNo}
                />)
            })
        .catch(e => console.log(e))
    
      return () => {
        
      }
    }, [])
     

  return (
    <div>
            {element}
    </div>
  )
}

export default Regulator