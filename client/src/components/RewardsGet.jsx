import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
// import PullData from "./DataPull";









const RewardsGet = () => {

    const [prizes, setPrizes] = useState()
    
    


    

    useEffect(() => {

        async function testFunc() {

            let data = await axios.get('http://localhost:3001/prizes')
            console.log(data)


        }
       
        testFunc()


    }, [])
    

    
    


        



   

  

    

    

    

    
    
    

    return (
        <div>
            <h1>React is dumb</h1>
            {/* <p>{prizes}</p> */}
        </div>
    )

}



export default RewardsGet