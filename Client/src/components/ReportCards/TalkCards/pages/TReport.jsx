import React from 'react'
import Talks from '../../../../Data/Talks'
import Navbar from '../../../Nav/Nav'

function Report() {
    return (
        <>
            <Navbar ind={0} Menus={Talks} />
            <div className="h-screen flex-1 p-7">Report</div>
        </>
    )
}

export default Report