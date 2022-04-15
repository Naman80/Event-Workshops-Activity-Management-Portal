import React from 'react'
import FDPMenus from '../../../Data/FDPMenus'
import Navbar from '../../../../components/Nav/Nav'

function Applications() {
    return (
        <>
            <Navbar ind={2} Menus={FDPMenus} />
            <div className="h-screen flex-1 p-7">Applications</div>
        </>
    )
}

export default Applications