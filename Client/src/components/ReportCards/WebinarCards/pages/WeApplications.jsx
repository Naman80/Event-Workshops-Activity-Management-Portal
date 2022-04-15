import React from 'react'
import Webinar from '../../../../Data/Webinar'
import Navbar from '../../../Nav/Nav'

function Applications() {
    return (
        <>
            <Navbar ind={2} Menus={Webinar} />
            <div className="h-screen flex-1 p-7">Applications</div>
        </>
    )
}

export default Applications