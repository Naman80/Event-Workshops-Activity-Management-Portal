import React from 'react'
import Webinar from '../../../Data/Webinar'
import Navbar from '../../../../components/Nav/Nav'
import Nodes from "../../../../components/Nodes"

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={Webinar} />
            <div className="h-screen flex-1 p-7"><Nodes /></div>
        </>
    )
}

export default Status