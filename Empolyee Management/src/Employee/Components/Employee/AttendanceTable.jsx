import React from 'react';
import './AttendanceTable.scss';

const AttendanceTable = () => {
    const employees = [
        { Date: '1/3/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '3/4/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '5/4/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '1/3/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '1/3/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
    ];

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
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.Date}</td>
                            <td>{employee.timeIn}</td>
                            <td>{employee.timeOut}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
