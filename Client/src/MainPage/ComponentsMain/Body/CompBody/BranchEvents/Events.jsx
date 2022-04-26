import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import EventPage from './EventPage'

const Events = (props) => {
    
  return (
    <>
    <Navbar></Navbar>
    <EventPage name = {props.name}></EventPage>
    <Footer></Footer>

    
    </>
  )
}

export default Events