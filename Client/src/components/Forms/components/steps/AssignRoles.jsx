import { useStepperContext } from "../../contexts/StepperContext";
import 'react-dropdown/style.css';
import db from "../../../../Firebase/Firebase";
import { useEffect, useState } from "react";
import Select from 'react-select'

export default function AssignRoles() {
    const { userData, setUserData } = useStepperContext();
    const [load, setLoad] = useState(true);

    const id = "Ng3spzjfjKEicrmAD0Ox";

    const handleChange = (option) => {
        setUserData({ ...userData, "Venue": option });
    };
    const handleChange2 = (option) => {
        setUserData({ ...userData, "Logistics": option });
    };
    const handleChange3 = (option) => {
        setUserData({ ...userData, "Canteen": option });
    };
    const handleChange4 = (option) => {
        setUserData({ ...userData, "SocialMedia": option });
    };

    const [options, setOptions] = useState([]);

    const getMarker = async () => {
        const events = await db.collection("database")
        events.get().then((querySnapshot) => {
            querySnapshot.docs.map((doc) => {
                if (doc.id != id) setOptions((arr) => [...arr, { value: doc.data().Name, label: doc.data().Name, id: doc.id }]);
            })
        })
    }

    useEffect(() => {
        getMarker();
        setLoad(false);
    }, [])


    return (
        <>
            {load ? <></> :
                <div className="flex flex-col ">
                    <div className=" w-full flex-1">
                        <div className="underline mt-3 h-6 text-2xl font-bold uppercase leading-8 text-gray-500">
                            Assign people to the given tasks
                        </div>
                        <div className="mt-3 flex flex-col items-start">
                            <div className="mt-5 flex items-center justify-center">
                                <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                                    Venue Booking :
                                </div>
                                <Select options={options} onChange={handleChange} />
                            </div>
                            <div className="mt-5 flex items-center justify-center">
                                <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                                    Logistics Arrangement :
                                </div>
                                <Select options={options} onChange={handleChange2} />  </div>
                            <div className="mt-5 flex items-center justify-center">
                                <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                                    Canteen Order :
                                </div>
                                <Select options={options} onChange={handleChange3} /></div>
                            <div className="mt-5 flex items-center justify-center">
                                <div className="w-72 h-6 text-xl font-bold uppercase leading-8 text-gray-500">
                                    Social Media Post :
                                </div>
                                <Select options={options} onChange={handleChange4} /> </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}