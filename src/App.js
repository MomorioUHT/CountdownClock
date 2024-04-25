import React from 'react';
import {useEffect, useState} from 'react'

const secondsToFace = (seconds) => {
	const hours = Math.floor(seconds/3600)
	const minutes = Math.floor((seconds % 3600)/60)
	const remS = (seconds % 3600)%60

    return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(remS).padStart(2, '0')
}

const CountDownClock = ({ h, m, s }) => {
    const initialSeconds = h * 3600 + m * 60 + s;
    const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingSeconds(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                if (newSeconds <= 0) {
                    clearInterval(timer); 
                    return 0;
                }
                return newSeconds;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = secondsToFace(remainingSeconds);

    return (
        <div style={{ 
            fontSize: '200px', 
            fontWeight: 'bold', 
            color: 'black', 
            fontFamily: 'Helvetica'}}>
            {formattedTime}
        </div>
    );
};

const App = () => {
    const hours = 4
    const minutes = 0
    const seconds = 0

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',  
            alignItems: 'center',      
            minHeight: '90vh',        
        }}>
            <CountDownClock h={hours} m={minutes} s={seconds} />
        </div>
    );
};

export default App;