import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useStepperContext } from "../../contexts/StepperContext";
import db from "../../../../Firebase/Firebase";
import Loader from "../../../Loader/Loader"

export default function Final() {

    const { userData } = useStepperContext();
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const id = "msNi9vkzM4rtp7NsOj6o";

    const status = {
        Venue: "in-process",
        Logistics: "in-process",
        Canteen: "in-process",
        SocialMedia: "in-process",
    }

    const setData = async () => {

        const newtype = await db.collection(userData.type).add({
            Name: userData.EventName,
            VenuePref: userData.venuePref,
            description: userData.description,
            speakers: userData.speakers,
            CanteenRole: userData.Canteen,
            LogisticsRole: userData.Logistics,
            SocialMedia: userData.SocialMedia,
            VenueRole: userData.Venue,
            status: status,
            Admin: id,
            VenueStatus: "in-process",
            VenueFeedback: "",
            CanteenStatus: "not-started",
            CanteenFeedback: "",
            LogisticsStatus: "not-started",
            LogisticsFeedback: "",
            SocialsStatus: "not-started",
            SocialsFeedback: "",
            InformingPeople: "not-started",
        })
        db.collection("Admin").doc(id).collection(userData.type).add({
            EventId: newtype.id,
            Name: userData.EventName,
        })
        db.collection("database").doc(userData.Venue.id).collection(userData.type).add({
            EventId: newtype.id,
            admin: id,
            role: "Venue Selection",
            venuePref: userData.venuePref,
        })
        db.collection("database").doc(userData.Logistics.id).collection(userData.type).add({
            EventId: newtype.id,
            admin: id,
            role: "Logistics Arrangement",
            description: userData.description,
            speakers: userData.speakers,
        })
        db.collection("database").doc(userData.SocialMedia.id).collection(userData.type).add({
            EventId: newtype.id,
            admin: id,
            role: "Social Media",
            description: userData.description,
            speakers: userData.speakers,
        })
        db.collection("database").doc(userData.Canteen.id).collection(userData.type).add({
            EventId: newtype.id,
            admin: id,
            role: "Canteen",
        })
    }


    const handleClick = () => {
        setLoading(true);
        setData();
        setTimeout(function () {
            setConfirm(true);
        }, 3000);
    }

    return (
        <>
            {!confirm ? (
                <div className="container md:mt-10">
                    <div className="flex flex-col items-center">
                        {!loading ?
                            <>
                                <div className="mt-3 text-xl font-semibold uppercase text-green-500 mb-5">
                                    Click the button below to create your event.
                                </div>
                                <button onClick={() => handleClick()} className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
                                    Create
                                </button>
                            </> :
                            <Loader />
                        }
                    </div>
                </div>
            ) :
                <div className="container md:mt-10">
                    <div className="flex flex-col items-center">
                        <div className="wrapper">
                            <svg
                                className="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                            >
                                <circle
                                    className="checkmark__circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                />
                                <path
                                    className="checkmark__check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                            </svg>
                        </div>

                        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
                            Congratulations!
                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            Your Event has been created.
                        </div>
                        <NavLink className="mt-10" to="/admin">
                            <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
                                Close
                            </button>
                        </NavLink>
                    </div>
                </div>
            }
        </>
    );
}