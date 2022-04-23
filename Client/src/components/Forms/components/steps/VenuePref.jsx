import { useStepperContext } from "../../contexts/StepperContext";
import VenueCard from "../VenueCard"

export default function VenuePref() {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-2xl leading-8 uppercase">
                    Select Venue preference
                </div>
                <VenueCard />
            </div>
        </div>
    );
}