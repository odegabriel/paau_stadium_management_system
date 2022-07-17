import React, { Fragment, useState, useEffect } from 'react'
import paau from '../image/paau logo.png'
import '../App.css'
import axios from 'axios'
import { useMatch } from 'react-router-dom'

const RegulatorsAccount = () => {

    const match = useMatch('regulator/:id')

    useEffect(() => {
      axios.get(`http://localhost:3002//admin/${match.params.id}/regulator`)
      .then(res => console.log(res))
      .catch(e => console.log(e))
    
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default RegulatorsAccount