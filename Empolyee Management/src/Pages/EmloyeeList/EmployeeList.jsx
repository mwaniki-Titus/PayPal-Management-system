import React, { useState } from 'react';
import './EmployeeList.scss';
import ModalForm from '../../Components/Attendance/attendanceForm';

const EmployeeList = () => {
    const [showModal, setShowModal] = useState(false);
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Manager', schedule: 'Mon-Fri, 9:00 AM - 5:00 PM' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Developer', schedule: 'Mon-Fri, 9:30 AM - 6:00 PM' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', position: 'Designer', schedule: 'Mon-Fri, 10:00 AM - 5:30 PM' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com', position: 'HR', schedule: 'Mon-Fri, 9:15 AM - 6:15 PM' },
        { id: 5, name: 'Eve Williams', email: 'eve@example.com', position: 'Accountant', schedule: 'Mon-Fri, 9:45 AM - 5:45 PM' }
    ]);
    const apiUrl = 'http://localhost:8000/api/employees/add';

    const handleAddEmployee = async (newEmployee) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmployee),
            });

            if (!response.ok) {
                throw new Error('Failed to add employee');
            }

            const data = await response.json();
            setEmployees([...employees, data]);
            setShowModal(false);
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="EmployeeList-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>EmployeeList</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>
            <div className="addNew">
                <button onClick={() => setShowModal(true)}>+ New</button>
            </div>

            <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={handleAddEmployee} />

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
                                <button>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
