import React from 'react'
import Card from '../../components/Card'

function Talks() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/coordinator/talks/report" />
            <Card to="/coordinator/talks/report" />
            <Card to="/coordinator/talks/report" />
            <Card to="/coordinator/talks/report" />
        </div>
    )
}

export default Talks;