import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Nav.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const Navbar = ({ ind, Menus }) => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {Menus.map((Menu, index) => (
                        <NavLink to={Menu.to} key={index}>
                            <li
                                key={index}
                                className={`nav-item ${ind == index ? "nav-under" : ""}`}
                            >
                                {Menu.title}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar