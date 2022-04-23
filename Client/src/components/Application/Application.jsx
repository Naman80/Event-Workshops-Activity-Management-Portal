import React from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Avatar } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import "./Application.css"

function Application({ }) {

    return (
        <div className="request">
            <div className="Names">
                <Avatar src="" style={{ height: "60px", width: "60px" }} />
                <h3 className="name">Name</h3>
            </div>
            <div className="req-icons">
                <div className="icon">
                    <DoneOutlineIcon />
                </div>
                <div className="icon">
                    <CancelIcon />
                </div>
            </div>
        </div>
    )
}

export default Application