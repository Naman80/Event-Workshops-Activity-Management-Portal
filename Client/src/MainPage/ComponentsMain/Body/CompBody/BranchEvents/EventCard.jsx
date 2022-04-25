import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = (props) => {
  return (

     <div className="card">
      <Link to={"/" + props.title}>
          <img src={props.img} />
          <div className="card-body">
            <h2>{props.title}</h2>
          </div>
          </Link>
        </div>


  )
}

export default EventCard