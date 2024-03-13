import React, { useState } from 'react';
import './TimeTable.scss';

const TimeTable = () => {
    const [editedEmployees, setEditedEmployees] = useState([
        { Date: '1/3/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '3/4/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { Date: '5/4/2024', timeIn: '09:00 AM', timeOut: '05:00 PM' },
     
    ]);

    const handleTimeChange = (index, field, value) => {
        const updatedEmployees = [...editedEmployees];
        updatedEmployees[index][field] = value;
        setEditedEmployees(updatedEmployees);
    };

    return (
        <div className="timein-table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                    </tr>
                </thead>
                <tbody>
                    {editedEmployees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.Date}</td>
                            <td>
                                <input
                                    type="text"
                                    value={employee.timeIn}
                                    onChange={e => handleTimeChange(index, 'timeIn', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={employee.timeOut}
                                    onChange={e => handleTimeChange(index, 'timeOut', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
