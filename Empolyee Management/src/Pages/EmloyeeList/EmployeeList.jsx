// Attendance.js

import React from 'react';
import './Attendance.scss';
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const Attendance = () => {
    const employees = [
        { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Manager', schedule: 'Mon-Fri, 9:00 AM - 5:00 PM' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Developer', schedule: 'Mon-Fri, 9:30 AM - 6:00 PM' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', position: 'Designer', schedule: 'Mon-Fri, 10:00 AM - 5:30 PM' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com', position: 'HR', schedule: 'Mon-Fri, 9:15 AM - 6:15 PM' },
        { id: 5, name: 'Eve Williams', email: 'eve@example.com', position: 'Accountant', schedule: 'Mon-Fri, 9:45 AM - 5:45 PM' }
    ];

    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
    };

    return (
        <div className="attendance-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>EmployeeList</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>
            <div className="addNew">
                <button>+ New</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Schedule</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
                            <td>{employee.schedule}</td>
                            <td>
                                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;
