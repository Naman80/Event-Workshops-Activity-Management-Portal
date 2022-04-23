import React from 'react'
import Webinar from '../../../Data/Webinar'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import SocialMedia from '../../../Tasks/SocialMedia'

function MyTask() {
    return (
        <>
            <Navbar ind={2} Menus={Webinar} />
            <div className="h-screen flex-1 p-7">
                <SocialMedia />
            </div>
        </>
    )
}

export default MyTask