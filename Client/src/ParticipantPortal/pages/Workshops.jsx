import React from 'react'
import Card from '../../components/Card';

function Workshops() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/participant/workshop/report" />
            <Card to="/participant/workshop/report" />
            <Card to="/participant/workshop/report" />
            <Card to="/participant/workshop/report" />
        </div>
    )
}

export default Workshops;