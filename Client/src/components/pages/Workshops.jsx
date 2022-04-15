import React from 'react'
import Card from '../Card';

function Workshops() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/workshop/report" />
            <Card to="/workshop/report" />
            <Card to="/workshop/report" />
            <Card to="/workshop/report" />
        </div>
    )
}

export default Workshops;