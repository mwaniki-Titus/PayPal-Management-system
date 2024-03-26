import React, { useState } from 'react';
import './TimeTable.scss'

const TimeTable = ({ onTimeInChange, onTimeOutChange, onSubmit }) => {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');

    const handleTimeInChange = (e) => {
        setTimeIn(e.target.value);
        onTimeInChange(e.target.value);
    };

    const handleTimeOutChange = (e) => {
        setTimeOut(e.target.value);
        onTimeOutChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
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

