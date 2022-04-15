import React from 'react'
import Talks from '../../../../Data/Talks'
import Navbar from '../../../Nav/Nav'

function Applications() {
    return (
        <>
            <Navbar ind={2} Menus={Talks} />
            <div className="h-screen flex-1 p-7">Applications</div>
        </>
    )
}

export default Applications