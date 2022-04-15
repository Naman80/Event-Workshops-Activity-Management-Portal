import React from 'react'
import Webinar from '../../../../Data/Webinar'
import Navbar from '../../../Nav/Nav'

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={Webinar} />
            <div className="h-screen flex-1 p-7">Status</div>
        </>
    )
}

export default Status