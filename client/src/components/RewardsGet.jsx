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
            <img src='https://i.imgur.com/F84yv0K.png' alt="Rasta Banana" class="prize"/>
            <img src="https://i.imgur.com/GEwjEYH.png" alt="Teddy Bear" class="prize"/>
            <h1>React is dumb</h1>
            <p>{prizes}</p>
        <div>
            <ul class="thePrizes">
                <li>
                    <img src='https://i.imgur.com/F84yv0K.png' alt="Rasta Banana" class="prize"/>
                    <p>20 tickets</p>
                </li>
                <li>
                    <img src="https://i.imgur.com/GEwjEYH.png" alt="Teddy Bear" class="prize"/>
                    <p>10 tickets</p>
                </li>
                <li>
                    <img src="https://i.imgur.com/V5Vw9Ik.png" alt="Car" class="prize" id="car"/>
                    <p>100 tickets</p>
                </li>
            </ul>
        </div>
        <div>
            <ul class="thePrizes">
                <li>
                    <img src="https://i.imgur.com/KO6oilE.png" alt="Chicken" class="prize"/>
                    <p>75 tickets</p>
                </li>
                <li>
                    <img src="https://i.imgur.com/olsQrkE.png" alt="Goldfish" class="prize"/>
                    <p>300 tickets</p>
                </li>
                <li>
                    <img src="https://i.imgur.com/PzprEHO.png" alt="Watch" class="prize" id="watch"/>
                    <p>35 tickets</p>
                </li>
            </ul>
        </div>
        </div>
    )

}



export default RewardsGet