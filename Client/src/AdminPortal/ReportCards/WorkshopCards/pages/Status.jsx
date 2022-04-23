import React from 'react'
import WorkshopMenus from '../../../Data/WorkshopMenus'
import Navbar from '../../../../components/Nav/Nav'
import Nodes from "../../../../components/Nodes"
import { useXarrow } from "react-xarrows";
import db from "../../../../Firebase/Firebase"
import { useParams } from 'react-router-dom'
import Loader from '../../../../components/Loader/Loader';

function Status() {

    const [data, setData] = React.useState();
    const { eventId, type } = useParams()
    const updateXarrow = useXarrow();

    React.useEffect(() => {
        let a = eventId.slice(1, eventId.length)
        let b = type.slice(1, type.length)
        db.collection(b).doc(a).get().then(doc => {
            setData(doc.data())
        })
    }, [])

    return (
        <>
            <Navbar ind={1} Menus={WorkshopMenus} id={eventId} onScroll={updateXarrow} type={type} />
            {data != null ?
                <div className="h-screen flex-1 p-7">
                    <Nodes data={data} />
                </div> :
                <Loader />
            }
        </>
    )
}

export default Status