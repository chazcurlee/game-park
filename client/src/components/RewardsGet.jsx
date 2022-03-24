import React from "react";
import { useState } from 'react'
import axios from 'axios'

const RewardsGet = async () => {

    const [prizes, setPrizes] = useState()

    const getPrizes = async () => {

        let res = await axios.get('http://localhost:3001/prizes')
        setPrizes(res)

    }

    
    
    

    return (
        <div>
            <h1>React is dumb</h1>
            <p>{prizes}</p>
        </div>
    )

}



export default RewardsGet