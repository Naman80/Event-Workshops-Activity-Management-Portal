import React from 'react'
import {Link} from 'react-router-dom'
import "./BranchCard.css"
const BranchCard = ({branch}) => {
  // console.log(props.branch);
  // console.log(branch);
  return (
    <>
    <div className="card">
        <Link to={"/" +branch}>
            <div className="card-body">
                <h2>{branch}</h2>
            </div>
        </Link>
    </div>
    
    </>
  )
}

export default BranchCard