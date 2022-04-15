import React from 'react'
import FDPMenus from '../../../Data/FDPMenus'
import Navbar from '../../../../components/Nav/Nav'

function Report() {
    return (
        <>
            <Navbar ind={0} Menus={FDPMenus} />
            <div className="h-screen flex-1 p-7">Report</div>
        </>
    )
}

export default Report