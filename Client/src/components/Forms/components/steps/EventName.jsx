import { useEffect } from "react";
import { useStepperContext } from "../../contexts/StepperContext";

export default function EventName({ type }) {
    const { userData, setUserData } = useStepperContext();

    useEffect(() => {
        setUserData({ ...userData, "type": type })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-2xl font-bold uppercase leading-8 text-gray-500">
                    Write a name for your event
                </div>
                <div className="my-2 mt-5 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        name="EventName"
                        placeholder="Username"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
        </div>
    );
}