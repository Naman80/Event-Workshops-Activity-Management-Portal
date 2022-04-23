import React from 'react'
import FDPMenus from '../../../Data/FDPMenus'
import Navbar from '../../../../components/Nav/Nav'
import VenueSelection from '../../../Tasks/VenueSelection'

function MyTask() {
    return (
        <>
            <Navbar ind={2} Menus={FDPMenus} />
            <div className="h-screen flex-1 p-7">
                <VenueSelection />
            </div>
        </>
    )
}

export default MyTask