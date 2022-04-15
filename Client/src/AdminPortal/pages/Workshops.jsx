import React from 'react'
import Card from '../../components/Card';

function Workshops() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/admin/workshop/report" />
            <Card to="/admin/workshop/report" />
            <Card to="/admin/workshop/report" />
            <Card to="/admin/workshop/report" />
        </div>
    )
}

export default Workshops;