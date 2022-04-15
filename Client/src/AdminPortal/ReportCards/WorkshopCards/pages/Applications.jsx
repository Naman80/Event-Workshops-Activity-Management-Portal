import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'

function Applications() {
    return (
        <>
            <Navbar ind={2} Menus={WorkshopMenus} />
            <div className="h-screen flex-1 p-7">Applications</div>
        </>
    )
}

export default Applications