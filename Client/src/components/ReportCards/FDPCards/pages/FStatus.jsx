import React from 'react'
import FDPMenus from '../../../../Data/FDPMenus'
import Navbar from '../../../Nav/Nav'

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={FDPMenus} />
            <div className="h-screen flex-1 p-7">Status</div>
        </>
    )
}

export default Status