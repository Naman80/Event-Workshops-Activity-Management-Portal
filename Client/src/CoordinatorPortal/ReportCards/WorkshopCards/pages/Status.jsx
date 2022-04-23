import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'
import Nodes from "../../../../components/Nodes"

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={WorkshopMenus} />
            <div className="h-screen flex-1 p-7"><Nodes /></div>
        </>
    )
}

export default Status