import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GetTickets from './GetTickets';
import './Nav.css';


const Nav = () => {


    return (
        <div>
            <ul>
                <li> <NavLink to="/">
                    <img src="https://i.imgur.com/fSCJn3O.png" alt="Home"/></NavLink>
                </li>
                <li> <NavLink to="games-n-rides">
                    <img src="https://i.imgur.com/qUiPXx8.png" alt="Rides and Games"/></NavLink>
                </li>
                <li> <NavLink to="/get-token">
                    <img src="https://i.imgur.com/WMiJ3v9.png" alt="Token Farm"/></NavLink>
                </li>
                <li> <NavLink to="rewards-get">
                    <img src="https://i.imgur.com/vtj8I4S.png" alt="Prizes"/></NavLink>
                </li>
                <li> <NavLink to="showcase">
                    <img src="https://i.imgur.com/h02jaxS.png" alt="Showcase" /></NavLink>
                </li>
                <li> <GetTickets /></li>
            </ul>
        </div>
        




    )


}

export default Nav