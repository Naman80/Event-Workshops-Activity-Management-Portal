import React from 'react'
import EventCard from './EventCard'

const LoadEventCard = (props) => {
  return (
    <div id='events' className='text-center'>
      <div style={{width : "100%"}} className='container'>
        <div style={{marginTop:"20px",marginBottom:"1px"}} className='col-md-10 col-md-offset-1 section-title'>
          <h2>Events</h2>
        </div>
        <div className='cards'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`}>
                 <EventCard
                 img = {d.img}
                 title = {d.title}
                 />
                  </div>
              ))
            : 'Loading...'}
        </div> 
      </div>
    </div>
  )
}

export default LoadEventCard