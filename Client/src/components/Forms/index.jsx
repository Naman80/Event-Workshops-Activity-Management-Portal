import React from 'react'
import Card from '../Card'

function index() {
    return (
        <div className=" h-full flex justify-center flex-wrap ">
            <h1 className="text-center font-serif text-2xl text-red-400 underline">Select the type of event to create</h1>
            <div className="flex flex-wrap -m-4">
                <Card to="/admin/create/workshop" title="Workshop" para="worksops are good" />
                <Card to="/admin/create/webinar" title="Webinar" para="webinar are online" />
                <Card to="/admin/create/fdp" title="FDP" para="fdp is good" />
                <Card to="/admin/create/talks" title="Talks" para="talks are good" />
            </div>
        </div>
    )
}

export default index