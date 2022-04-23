import React from 'react'
import Webinar from '../../../Data/Webinar'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import { useParams } from 'react-router-dom'

function Applications() {

    const { eventId } = useParams()

    return (
        <>
            <Navbar ind={2} Menus={Webinar} id={eventId} />
            <div className="h-screen flex-1 p-7">
                <AllApplications />
            </div>
        </>
    )
}

export default Applications