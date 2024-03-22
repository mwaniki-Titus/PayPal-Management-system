import React, { useEffect, useState } from 'react';
import './AttendanceTable.scss';
import { useGetAttendanceQuery } from '../../../Features/attendance/attendanceApi'; 
const AttendanceTable = ({ employeeId }) => {
    const [attendance, setAttendance] = useState([]);
    const { data, isLoading, isError } = useGetAttendanceQuery(employeeId);

    useEffect(() => {
        if (data) {
            setAttendance(data);
        }
    }, [data]);

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
        </div>
    );
};

export default AttendanceTable;

