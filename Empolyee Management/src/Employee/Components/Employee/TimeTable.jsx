import React, { useState } from 'react';
import './TimeTable.scss'

const TimeTable = () => {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');

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
        </form>
    );
};

export default TimeTable;

