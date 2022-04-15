import React from 'react'
import Webinar from '../../../Data/Webinar'
import Navbar from '../../../../components/Nav/Nav'

function Report() {
    return (
        <>
            <Navbar ind={0} Menus={Webinar} />
            <div className="h-screen flex-1 p-7">Report</div>
        </>
    )
}

export default Report