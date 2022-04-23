import React, { useRef } from 'react'
import Xarrow, { useXarrow } from "react-xarrows";
import "./index.css"

const canvasStyle = {
    position: 'relative',
    height: '100vh',
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
};

const boxStyle = {
    position: 'relative',
    border: '1px #999 solid',
    borderRadius: '10px',
    textAlign: 'center',
    width: '20%',
    margin: '5% 5%',
    height: '30%',
    color: 'black',
};

const Box = (props) => {
    const updateXarrow = useXarrow();
    return (
        <div ref={props.box.ref} id={props.box.id} className={`${props.box.background} flex flex-col justify-center items-center`} onScroll={updateXarrow} style={boxStyle}>
            <div className=" text-m underline font-bold uppercase leading-8 text-orange-500">
                {props.box.id}
            </div>
            <div className="text-m font-bold uppercase leading-8 text-gray-500">
                {props.box.status}
            </div>
        </div>
    );
};

function index({ data }) {
    const updateXarrow = useXarrow();
    const box1 = {
        id: 'venue booking', ref: useRef(null),
        status: data.VenueStatus,
        background: data.VenueStatus === "completed" ? 'success' : data.VenueStatus === "in-process" ? "in-progress" : data.VenueStatus === "failed" ? "failure" : "waiting"
    };
    const box2 = {
        id: 'logistics arrangement', ref: useRef(null),
        status: data.LogisticsStatus,
        background: data.LogisticsStatus === "completed" ? 'success' : data.LogisticsStatus === "in-process" ? "in-progress" : data.LogisticsStatus === "failed" ? "failure" : "grey"
    };
    const box3 = {
        id: 'informing people', ref: useRef(null),
        status: data.InformingPeople,
        background: data.InformingPeople === "completed" ? 'success' : data.InformingPeople === "in-process" ? "in-progress" : data.InformingPeople === "failed" ? "failure" : "grey"
    };
    const box5 = {
        id: 'canteen order', ref: useRef(null),
        status: data.CanteenStatus,
        background: data.CanteenStatus === "completed" ? 'success' : data.CanteenStatus === "in-process" ? "in-progress" : data.CanteenStatus === "failed" ? "failure" : "grey"
    };
    const box4 = {
        id: 'social media post', ref: useRef(null),
        status: data.SocialsStatus,
        background: data.SocialsStatus === "completed" ? 'success' : data.SocialsStatus === "in-process" ? "in-progress" : data.SocialsStatus === "failed" ? "failure" : "grey"
    };

    return (
        <div style={canvasStyle} id="canvas" onScroll={updateXarrow}>
            <Box box={box1} />
            <Box box={box2} />
            <Xarrow start={box1.id} end={box2.ref} strokeWidth={8} animateDrawing={true} dashness={true} />
            <Box box={box3} />
            <Xarrow start={box2.id} end={box3.ref} strokeWidth={8} dashness={true} animateDrawing={true} />
            <Box box={box4} />
            <Xarrow start={box3.id} end={box5.ref} strokeWidth={8} dashness={true} animateDrawing={true} />
            <Box box={box5} />
            <Xarrow start={box5.id} end={box4.ref} strokeWidth={8} dashness={true} animateDrawing={true} />
        </div>
    )
}

export default index