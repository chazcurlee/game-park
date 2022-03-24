import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {



    return (
        <div>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/get-token">Token Farm</NavLink></li>
                <li> <NavLink to="games-n-rides">Games and Rides</NavLink></li>
                <li> <NavLink to="rewards-get">Get Rewards</NavLink></li>
                <li> <NavLink to="showcase">Showcase</NavLink></li>
            </ul>
        </div>
        




    )


}

export default Nav