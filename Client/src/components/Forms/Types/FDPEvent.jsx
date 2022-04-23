import { useState } from "react";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";

import EventName from "../components/steps/EventName";
import Final from "../components/steps/Final";
import Date from "../components/steps/Date";
import VenuePref from "../components/steps/VenuePref";
import LogisticsPref from "../components/steps/LogisticPref"
import AssignRoles from "../components/steps/AssignRoles";
import { UseContextProvider } from "../contexts/StepperContext";

export default function FDPEvent() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Event Name",
        "Date",
        "Venue Pref",
        "Logistics Pref",
        "Assign Roles",
        "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <EventName type="fdp" />;
            case 2:
                return <Date />;
            case 3:
                return <VenuePref />;
            case 4:
                return <LogisticsPref />;
            case 5:
                return <AssignRoles />;
            case 6:
                return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="mx-auto rounded-2xl pb-2 shadow-xl md:w-full" style={{ backgroundColor: "bisque" }}>
            {/* Stepper */}
            <div className="horizontal container mt-5 ">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                </div>
            </div>

            {/* navigation button */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}
        </div>
    );
}