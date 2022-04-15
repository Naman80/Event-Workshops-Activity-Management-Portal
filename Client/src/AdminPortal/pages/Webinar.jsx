import React from 'react'
import Card from '../../components/Card'

function Webinar() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/admin/webinar/report" />
            <Card to="/admin/webinar/report" />
            <Card to="/admin/webinar/report" />
            <Card to="/admin/webinar/report" />
        </div>
    )
}

export default Webinar;