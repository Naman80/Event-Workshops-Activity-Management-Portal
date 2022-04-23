import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import EventPage from './components/EventPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
const MainNavigate = () => {


  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<App/>}></Route>
    <Route path='/Workshops' element = {<EventPage  name = {'Workshops'}/>}></Route>
    <Route path='/FDPs' element = {<EventPage name = {'FDPs'}/>}/>
    <Route path='/Talks' element = {<EventPage name = {'Talks'}/>}/>
    <Route path='/Webinars' element = {<EventPage name = {'Webinars'}/>}/>
    <Route path = '/Login' element = {<LoginPage/>} />
      <Route path = '/Register' element = {<RegisterPage/>} />

    </Routes>
    
    </BrowserRouter>

  )
}

export default MainNavigate