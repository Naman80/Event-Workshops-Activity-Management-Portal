import React from 'react'
import Talks from '../../../Data/Talks'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import LogisticsArrangement from '../../../Tasks/LogisticsArrangement'

function MyTask() {
    return (
        <>
            <Navbar ind={2} Menus={Talks} />
            <div className="h-screen flex-1 p-7">
                <LogisticsArrangement />
            </div>
        </>
    )
}

export default MyTask