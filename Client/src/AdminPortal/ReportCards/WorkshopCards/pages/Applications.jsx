import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import { useParams } from 'react-router-dom'

function Applications() {

    const { eventId } = useParams()

    return (
        <>
            <Navbar ind={2} Menus={WorkshopMenus} id={eventId} />
            <div className=" flex-1 p-7">
                <AllApplications />
            </div>
        </>
    )
}

export default Applications