import React from 'react'
import { NavLink } from "react-router-dom"
const Card = ({ source, title, date, para, to, id, onClick }) => {
    return (
        <div class="p-4 sm:w-1/3 lg:w-1/4 cursor-pointer" id={id} >
            <NavLink to={to}>
                <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-42 md:h-48 w-full object-cover object-center"
                        src={source ? source : "https://picsum.photos/id/188/720/400"} alt="blog" />
                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 class="text-base font-medium text-indigo-300 mb-1">{date}</h2>
                        <h1 class="text-2xl font-semibold mb-3">{title}</h1>
                        <p class="leading-relaxed mb-3">{para}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;