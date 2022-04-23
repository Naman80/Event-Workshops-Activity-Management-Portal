import { useStepperContext } from "../../contexts/StepperContext";

export default function Logistics() {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-2xl font-bold uppercase leading-8 text-gray-500">
                    Mention Logistical Preference
                </div>
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Write description of your event
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <textarea
                        onChange={handleChange}
                        name="description"
                        placeholder="description"
                        rows={8}
                        cols={10}
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Write any preferences for the speakers/tutors
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <textarea
                        onChange={handleChange}
                        name="speakers"
                        placeholder="speakers"
                        rows={3}
                        cols={10}
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
        </div>
    );
}