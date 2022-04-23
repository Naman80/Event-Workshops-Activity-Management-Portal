import React from 'react'
import Card from '../../components/Card'
import Loader from '../../components/Loader/Loader';
import db from '../../Firebase/Firebase';

function FDP() {

    const id = "msNi9vkzM4rtp7NsOj6o";
    const [arr, setArr] = React.useState([]);

    React.useEffect(() => {
        const events = db.collection("Admin").doc(id).collection("fdp")
        events.get().then((querySnapshot) => {
            querySnapshot.docs.map((docu) => {
                db.collection("fdp").doc(docu.data().EventId).get().then((doc) => {
                    const obj = { id: doc.id, name: doc.data().Name };
                    if (!arr.some(val => val.name === obj.name)) {
                        setArr(prev => [...prev, obj]);
                    }
                })
            })
        })
    }, [])

    return (
        <>
            {arr.length === 0 ? <Loader /> :
                <div className="flex flex-wrap -m-4">
                    {
                        arr.map(data => {
                            return <Card to={`/admin/fdp/report/:${data.id}/:fdp`} title={data.name} />
                        })
                    }
                </div>
            }
        </>
    )
}

export default FDP