import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useMatch, } from 'react-router-dom'





const Element = ({firstName, lastName, email, _id}) => {

    
    const [remove, setRemove] = useState()
    const [view, setView] = useState()

//useMatch method
    //const {id} = useMatch()

    useEffect(() => {
      
        if (remove === 'processing') {
            axios.delete(`http://localhost:3002/admin/delete/${_id}/regulator`)
        .then(res => console.log(res))
        .catch(e => console.log("an erro has occured"))
    
        }
    
      return () => {
        
      }
    }, [remove])
    

//derect id Methos
  return (
    <div className='element'>
        <div>
            <h3>{firstName}</h3>
        </div>
        <div>
            <h3>{lastName}</h3>
        </div>
        <div>
            <p>{email}</p>
        </div>
        <div>
            <div>
                <Link to={`/admin/${_id}/regulator`}><button onClick={()=> setView('processing')}>View</button></Link>
            </div>
            <div>
                <button onClick={()=> setRemove('processing')}>Delete</button>
            </div>
        </div>
    </div>
    
  )
}

export default Element