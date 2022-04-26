import React from 'react'
import img from  './maitphoto.jpeg'
import './SingleImage.css'
const Image = () => {
  return (
    
    <div className='coverImage'>
      <img src={img} alt="Image" />
    </div>
    
  )
}

export default Image