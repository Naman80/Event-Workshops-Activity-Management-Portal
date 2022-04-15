import React from 'react'
import WorkshopMenus from '../../../../Data/WorkshopMenus'
import Navbar from '../../../Nav/Nav'

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={WorkshopMenus} />
            <div className="h-screen flex-1 p-7">Status</div>
        </>
    )
}

export default Status