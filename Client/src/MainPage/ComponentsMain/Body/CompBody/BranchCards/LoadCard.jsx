import React from 'react'
import BranchCard from './BranchCard'
import "./BranchCard.css"
const LoadCard = (props) => {
  return (
      <>
        <div className='cards'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.branch}-${i}`}>
                 <BranchCard
                  branch = {d.branch}
            />
                  </div>
              ))
            : 'Loading...'}
        </div> 
      </> 
  )
}

export default LoadCard