import React from 'react'
import Talks from '../../../Data/Talks'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import { useParams } from 'react-router-dom'

function Applications() {

    const { eventId } = useParams()

    return (
        <>
            <Navbar ind={2} Menus={Talks} id={eventId} />
            <div className="h-screen flex-1 p-7">
                <AllApplications />
            </div>
        </>
    )
}

export default Applications