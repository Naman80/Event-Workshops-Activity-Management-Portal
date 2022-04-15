import React from 'react'
import WorkshopMenus from '../../../../Data/WorkshopMenus'
import Navbar from '../../../Nav/Nav'

function Report() {
    return (
        <>
            <Navbar ind={0} Menus={WorkshopMenus} />
            <div className="h-screen flex-1 p-7">Report</div>
        </>
    )
}

export default Report