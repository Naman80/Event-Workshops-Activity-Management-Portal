import React from 'react'
import FDPMenus from '../../../Data/FDPMenus'
import Navbar from '../../../../components/Nav/Nav'
import { useParams } from 'react-router-dom'

function Report() {

    const { eventId } = useParams()

    return (
        <>
            <Navbar ind={0} Menus={FDPMenus} id={eventId} />
            <div className="h-auto flex-1 p-7 bg-orange-300 mt-3">
                <div className='flex items-center'>
                    <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                        Venue Booking :</div>
                    <div className='text-xl'> Yet to be booked.</div>
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                        Logistics Arrangement :</div>
                    <div className='text-xl'> No update provided yet.</div>
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                        Invites Sent :</div>
                    <div className='text-xl'> Yet to be sent.</div>
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                        Canteen Order :</div>
                    <div className='text-xl'> Order yet to be placed.</div>
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                        Social Post :</div>
                    <div className='text-xl w-80 break-words'>
                        Yet to be posted.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report