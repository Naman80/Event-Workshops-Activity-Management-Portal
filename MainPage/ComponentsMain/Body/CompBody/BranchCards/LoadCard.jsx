import React from 'react'
import BranchCard from './BranchCard'
// import data from "../Data/data.js"
import "./BranchCard.css"
const LoadCard = (props) => {
  // console.log(props.data[0]);
  return (
      <>
        <div className='cards'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.branch}-${i}`}>
                 <BranchCard
                  branch = {d.branch}
            />
            {/* <h1>idnieni</h1> */}
                  </div>
              ))
            : 'Loading...'}
        </div> 
{/* 
        <div>
          <BranchCard branch = "CSE"></BranchCard>
          <BranchCard branch = "CSE"></BranchCard>
          <BranchCard branch = "CSE"></BranchCard>
          <BranchCard branch = "CSE"></BranchCard>
          <BranchCard branch = "CSE"></BranchCard>
        </div> */}
      </> 
  )
}

export default LoadCard