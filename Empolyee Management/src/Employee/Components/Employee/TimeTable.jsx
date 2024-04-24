import React, { useState, useEffect } from 'react';
import './TimeTable.scss';

const TimeTable = ({ onSubmit }) => {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        let interval;
        if (timeIn && !timeOut) {
            interval = setInterval(() => {
                const startTime = new Date(timeIn);
                const currentTime = new Date();
                const difference = currentTime - startTime;
                const hours = Math.floor(difference / 3600000);
                const minutes = Math.floor((difference % 3600000) / 60000);
                setDuration(`${hours} hours ${minutes} minutes`);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timeIn, timeOut]);

    const handleTimeInChange = (e) => {
        const newTimeIn = e.target.value;
        setTimeIn(newTimeIn);
    };

    const handleTimeOutChange = (e) => {
        const newTimeOut = e.target.value;
        setTimeOut(newTimeOut);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="timeIn">Clock In:</label>
                <input
                    type="datetime-local"
                    id="timeIn"
                    value={timeIn}
                    onChange={handleTimeInChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="timeOut">Clock Out:</label>
                <input
                    type="datetime-local"
                    id="timeOut"
                    value={timeOut}
                    onChange={handleTimeOutChange}
                    required
                />
            </div>
            {duration && <div>Duration: {duration}</div>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default TimeTable;
