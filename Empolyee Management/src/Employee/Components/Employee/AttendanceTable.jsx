import React, { useEffect, useState } from 'react';
import './AttendanceTable.scss';
import { useGetAttendanceQuery } from '../../../Features/attendance/attendanceApi'; 

const AttendanceTable = ({ employeeId, timeIn, timeOut }) => {
    const [attendance, setAttendance] = useState([]);
    const [duration, setDuration] = useState('');

    // Fetch attendance data
    const { data, isLoading, isError } = useGetAttendanceQuery(employeeId);

    useEffect(() => {
        if (data) {
            setAttendance(data);
        }
    }, [data]);

    // Calculate duration
    useEffect(() => {
        if (timeIn && timeOut) {
            const startTime = new Date("2024-01-01T" + timeIn + ":00Z");
            const endTime = new Date("2024-01-01T" + timeOut + ":00Z");
            const diff = endTime - startTime;
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            setDuration(`${hours} hours ${minutes} minutes`);
        }
    }, [timeIn, timeOut]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div className="attendancetable">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record, index) => (
                        <tr key={index}>
                            <td>{record.Date}</td>
                            <td>{record.timeIn}</td>
                            <td>{record.timeOut}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {duration && <p>Duration: {duration}</p>}
        </div>
    );
};

export default AttendanceTable;

