import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'

function MyTask() {
    return (
        <>
            <Navbar ind={2} Menus={WorkshopMenus} />
            <div className="h-screen flex-1 p-7"><AllApplications /></div>
        </>
    )
}

export default MyTask