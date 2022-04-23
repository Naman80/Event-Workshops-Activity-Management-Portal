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
        <div ref={props.box.ref} id={props.box.id} className={props.box.background} onScroll={updateXarrow} style={boxStyle}>
            {props.box.id}
        </div>
    );
};

function index() {
    const updateXarrow = useXarrow();
    const box1 = { id: 'venue', ref: useRef(null), background: 'success' };
    const box2 = { id: 'logistics', ref: useRef(null), background: 'success' };
    const box3 = { id: 'inform', ref: useRef(null), background: 'in-progress' };
    const box5 = { id: 'canteen', ref: useRef(null), background: 'in-progress' };
    const box4 = { id: 'post', ref: useRef(null), background: 'failure' };

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