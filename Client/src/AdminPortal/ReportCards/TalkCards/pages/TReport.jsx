import React from 'react'
import Talks from '../../../Data/Talks'
import Navbar from '../../../../components/Nav/Nav'
import { useParams } from 'react-router-dom'
import db from "../../../../Firebase/Firebase"
import Loader from "../../../../components/Loader/Loader"

function Report() {

    const [data, setData] = React.useState();
    const { eventId, type } = useParams()

    React.useEffect(() => {
        let a = eventId.slice(1, eventId.length)
        let b = type.slice(1, type.length)
        db.collection(b).doc(a).get().then(doc => {
            setData(doc.data());
        })
    }, [])

    return (
        <>
            <Navbar ind={0} Menus={Talks} id={eventId} type={type} />
            {data != null ?
                <div className="h-auto flex-1 items-center p-7 bg-orange-300 mt-3">
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Event Name:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.Name}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Venue Boooking Assigned to:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.VenueRole.value}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Venue Boooking Status:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.VenueStatus}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Venue Boooking Feedback:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.VenueFeedback.length != 0 ? data.VenueFeedback : "No Feedback provided"}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Logistics Arrangement Assigned to:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.LogisticsRole.value}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Logistics Arrangement Status:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.LogisticsStatus}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Logistics Arrangement Feedback:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.LogisticsFeedback.length != 0 ? data.LogisticsFeedback : "No Feedback provided"}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Informing People:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.InformingPeople}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Social Media Posts Assigned to:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.SocialMedia.value}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Social Media Posts Status:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.SocialsStatus}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Social Media Posts Feedback:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.SocialsFeedback.length != 0 ? data.SocialsFeedback : "No Feedback provided"}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Canteen Order Booking Assigned to:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.CanteenRole.value}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Canteen Order Booking Status:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.CanteenStatus}</div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className="w-1/2 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                            Canteen Order Booking Feedback:
                        </div>
                        <div className='text-l w-1/2 break-words'>{data.CanteenFeedback.length != 0 ? data.CanteenFeedback : "No Feedback provided"}</div>
                    </div>
                </div> :
                <Loader />
            }
        </>
    )
}

export default Report