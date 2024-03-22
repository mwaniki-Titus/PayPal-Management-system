import React, { useState } from 'react';
import './TimeTable.scss'

const TimeTable = () => {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [duration, setDuration] = useState('');

    const handleTimeInChange = (e) => {
        setTimeIn(e.target.value);
    };

    const handleTimeOutChange = (e) => {
        setTimeOut(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Time In:", timeIn);
        console.log("Time Out:", timeOut);
        
        // Calculate duration
        const startTime = new Date("1970-01-01T" + timeIn + ":00Z");
        const endTime = new Date("1970-01-01T" + timeOut + ":00Z");
        const diff = endTime - startTime;
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        setDuration(`${hours} hours ${minutes} minutes`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="timeIn">Time In:</label>
                <input
                    type="time"
                    id="timeIn"
                    value={timeIn}
                    onChange={handleTimeInChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="timeOut">Time Out:</label>
                <input
                    type="time"
                    id="timeOut"
                    value={timeOut}
                    onChange={handleTimeOutChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
            {duration && <p>Duration: {duration}</p>}
        </form>
    );
};

export default TimeTable;
