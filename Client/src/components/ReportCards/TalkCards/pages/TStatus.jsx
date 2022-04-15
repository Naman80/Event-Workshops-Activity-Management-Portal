import React from 'react'
import Talks from '../../../../Data/Talks'
import Navbar from '../../../Nav/Nav'

function Status() {
    return (
        <>
            <Navbar ind={1} Menus={Talks} />
            <div className="h-screen flex-1 p-7">Status</div>
        </>
    )
}

export default Status