import React, {useReducer, useState} from 'react'
import Menu from './Menu'



const Nav = () => {
    
    const [menu, setMenu] = useState('');
  return (
    <div>
        <img src='' alt='menu' onClick={()=> {
            
            if(menu === '' )
            {
                setMenu(<Menu/>)
            }else{
                setMenu('')
            }
            }}  />
        {menu}
    </div>
  )
}

export default Nav

