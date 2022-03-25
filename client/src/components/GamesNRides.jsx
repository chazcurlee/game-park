import React from "react";
// possibly readd { useState }

const GamesNRides = () => {
    // const [counter, setCounter] = useState(0)
        
    // const handleClick = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <div>
            {/* <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // position: 'absolute',
            top: '-15%',
            }}>
              <img src="https://i.imgur.com/M3bwNdD.png" alt="Tickets" />
            <div style={{
              fontSize: '200%',
              position: 'relative',
            }}>
              {counter}
            </div>
        </div> */}
            <a href="https://learned-hill.surge.sh/index.html"
            //  onClick={handleClick}
             target="_blank">
                <img src="https://i.imgur.com/Xpunr8j.png" alt="Marsupial Matching!" class="game"/>
            </a>
        </div>
    )

}



export default GamesNRides