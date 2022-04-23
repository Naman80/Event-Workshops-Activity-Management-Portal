import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'
import Nodes from "../../../../components/Nodes"
import { useXarrow } from "react-xarrows";
import { useParams } from 'react-router-dom'

function Status() {
    const { eventId } = useParams()
    const updateXarrow = useXarrow();
    return (
        <>
            <Navbar ind={1} Menus={WorkshopMenus} id={eventId} onScroll={updateXarrow} />
            <div className="h-screen flex-1 p-7">
                <Nodes />
            </div>
        </>
    )
}

export default Status