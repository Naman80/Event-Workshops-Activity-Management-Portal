import React from 'react'
import { Link } from 'react-router-dom'
import './EventCard.css';
const EventCard = (props) => {
  return (
     <div className="card">
      <Link to={"/" + props.title}>
          {/* <img src={props.img} /> */}
          <div className="card-body">
            <h2>{props.title}</h2>
            <h4>date</h4>
            <h4>time</h4>
            <h4>venue</h4>
          </div>
          </Link>
        </div>
  )
}

export default EventCard