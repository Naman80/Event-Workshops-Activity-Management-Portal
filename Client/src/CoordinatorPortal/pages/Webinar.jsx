import React from 'react'
import Card from '../../components/Card'

function Webinar() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/coordinator/webinar/report" />
            <Card to="/coordinator/webinar/report" />
            <Card to="/coordinator/webinar/report" />
            <Card to="/coordinator/webinar/report" />
        </div>
    )
}

export default Webinar;