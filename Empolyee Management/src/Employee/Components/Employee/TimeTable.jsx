
import React, { useState } from 'react';
import './TimeTable.scss';

const TimeTable = ({ onTimeInChange, onTimeOutChange, onSubmit }) => {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [duration, setDuration] = useState('');

    const handleTimeInChange = (e) => {
        const newTimeIn = e.target.value;
        setTimeIn(newTimeIn);
        onTimeInChange(newTimeIn);
        calculateDuration(newTimeIn, timeOut);
    };

    const handleTimeOutChange = (e) => {
        const newTimeOut = e.target.value;
        setTimeOut(newTimeOut);
        onTimeOutChange(newTimeOut);
        calculateDuration(timeIn, newTimeOut);
    };

    const calculateDuration = (newTimeIn, newTimeOut) => {
        if (newTimeIn && newTimeOut) {
            const startTime = new Date('1970-01-01T' + newTimeIn);
            const endTime = new Date('1970-01-01T' + newTimeOut);
            const difference = endTime - startTime;
            const hours = Math.floor(difference / 3600000);
            const minutes = Math.floor((difference % 3600000) / 60000);
            setDuration(`${hours} hours ${minutes} minutes`);
        } else {
            setDuration('');
        }
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
                    type="time"
                    id="timeIn"
                    value={timeIn}
                    onChange={handleTimeInChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="timeOut">Clock Out:</label>
                <input
                    type="time"
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

