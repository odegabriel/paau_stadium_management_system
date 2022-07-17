import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddMatch from './adminComponents/AddMatch'
import AdminLogin from './adminComponents/AdminLogin'
import LoginForm from './userComponents/LoginForm'
import UserRegister from './userComponents/UserRegister'
import RegisterRegulators from './adminComponents/RegisterRegulators'
import CurrentMatch from './userComponents/CurrentMatch'
import AdminHomePage from './adminComponents/AdminHomePage'
import ViewDeleteReg from './adminComponents/ViewDeleteReg'
import Regulator from './adminComponents/Regulator'
import UserAccount from './userComponents/UserAccount'
import PrintPaper from './userComponents/PrintPaper'
import PageNotFound from './userComponents/PageNotFound'
import RegulatorsLogIn from './adminComponents/RegulatorsLogIn'
import RegulatorsAccount  from './adminComponents/RegulatorsAccount'


const App = () => {
  return (
    <div className=''>
      <div>
        <Router>
          <Routes>
            <Route path='/login'  element={<LoginForm />} />
         
            <Route path='/admin/addmatch' element={<AddMatch />}/>
         
            <Route path='/registration' element={<UserRegister/>} />
          
            <Route path='/regulator/login' element={<RegulatorsLogIn/>} />
        
            <Route path='/regulator/:id' element={< RegulatorsAccount />} />
         
            <Route path='/admin/login' element={<AdminLogin/>} />
          
            <Route path='/admin/registerregulator' element={<RegisterRegulators/>} />
         
            <Route  path='/'  element={<CurrentMatch/>}/>
         
            <Route path='/admin/home/:id' element={<AdminHomePage/>}/>
         
            <Route path='/admin/regulator' element={<ViewDeleteReg/>}/>
         
            <Route path='/admin/:id/regulator' element={<Regulator/>}/>
          
            <Route path='/:id' element={<UserAccount/>}/>
          
            <Route path='/:id/ticket' element={<PrintPaper/>}/>
          
            <Route  path='*' element={<PageNotFound/>}/>
            </Routes>
        </Router>

      </div>
    </div>
  )
}

export default App