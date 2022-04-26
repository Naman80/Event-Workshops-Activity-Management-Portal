import React from 'react'
import "./RightCard.css"
const RightCard = ({title,info}) => {
  return (
    
    <>
    <div className='cardBox'>
        <div className='upCard'>
            <h1>{title}</h1>
        </div>
        <div className='downCard'>
            <h1>{info}</h1>
        </div>
    </div>
    
    </>
  )
}

export default RightCard