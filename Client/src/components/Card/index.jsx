import React from 'react'
import { NavLink } from "react-router-dom"
const Card = ({ source, title, date, para, to }) => {
    return (
        <div class="p-4 sm:w-1/3 lg:w-1/4 cursor-pointer">
            <NavLink to={to}>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-42 md:h-48 w-full object-cover object-center"
                        src="https://picsum.photos/id/188/720/400" alt="blog" />
                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                            2021</h2>
                        <h1 class="text-2xl font-semibold mb-3">Cities are crowded</h1>
                        <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam modi, expedita quos doloremque aut</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;