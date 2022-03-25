import React from 'react';

const GetTickets = () => {
    const [counter, setCounter] = useState(0)
        
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div style={{
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
         </div>
    )
}

export default GetTickets