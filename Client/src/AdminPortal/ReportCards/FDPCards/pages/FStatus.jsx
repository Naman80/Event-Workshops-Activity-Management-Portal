import React from 'react'
import FDPMenus from '../../../Data/FDPMenus'
import Navbar from '../../../../components/Nav/Nav'
import Nodes from "../../../../components/Nodes"
import { useXarrow } from "react-xarrows";
import { useParams } from 'react-router-dom'

function Status() {
    const updateXarrow = useXarrow();
    const { eventId } = useParams()

    return (
        <>
            <Navbar ind={1} Menus={FDPMenus} onScroll={updateXarrow} id={eventId} />
            <div className="h-screen flex-1 p-7">
                <Nodes />
            </div>
        </>
    )
}

export default Status