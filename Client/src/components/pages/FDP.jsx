import React from 'react'
import Card from '../Card'
import FDPCards from '../ReportCards/FDPCards/FDPCards'

function FDP() {
    return (
        <div className="flex flex-wrap -m-4">
            <Card to="/fdp/report" />
            <Card to="/fdp/report" />
            <Card to="/fdp/report" />
            <Card to="/fdp/report" />
        </div>
    )
}

export default FDP