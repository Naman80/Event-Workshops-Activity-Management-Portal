import React from 'react'
import Application from './Application'
import "./Application.css"

function AllApplications() {
    const [req, setReq] = React.useState([]);

    return (
        <div className="requests">
            <div className="full">
                {req.length == 0 ?
                    <div className='reqs flex' style={{ "height": "50vh" }}>
                        <h1 style={{ "fontSize": "2rem" }}> No application received yet </h1>
                    </div>
                    :
                    <div className="reqs">
                        <Application />
                        <Application />
                        <Application />
                        <Application />
                        {/* {req.map(re => {
                        return (<Request idd={re.data.friend} docId={re.docId} />)
                    })} */}
                    </div>
                }
            </div>
        </div>
    )
}

export default AllApplications