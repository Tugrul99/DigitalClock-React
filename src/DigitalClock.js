
import React, { useState, useEffect } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function getTimes() {
        let hours = time.getHours();
        let minutes = time.getHours();
        let seconds = time.getUTCSeconds();
        let meridiem = hours >= 12 ? 'PM' : "AM";


        return `${zeroConf(hours)} : ${zeroConf(minutes)} : ${zeroConf(seconds)} ${meridiem} `;
    }

    function zeroConf(number) {

        return (number < 10 ? "0" : "") + number;
    }



    return (
        <div className='clock-container'>
            <div className='clock'>
                <span> {getTimes()} </span>
            </div>

        </div>



    );

}









export default DigitalClock; 