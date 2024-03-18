import React, { useState } from 'react';
import ModalForm from '../../Components/Attendance/attendanceForm'
import './Attendance.scss';


const Attendance = () => {
    const [showModal, setShowModal] = useState(false);
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', position: 'Manager', timeIn: '09:00 AM', timeOut: '05:00 PM', overTime: '3' },
        { id: 2, name: 'Jane Smith', position: 'Developer', timeIn: '09:30 AM', timeOut: '06:00 PM', overTime: '3' },
        { id: 3, name: 'Alice Johnson', position: 'Designer', timeIn: '10:00 AM', timeOut: '05:30 PM', overTime: '3' },
        { id: 4, name: 'Bob Brown', position: 'HR', timeIn: '09:15 AM', timeOut: '06:15 PM', overTime: '3' },
        { id: 5, name: 'Eve Williams', position: 'Accountant', timeIn: '09:45 AM', timeOut: '05:45 PM', overTime: '3' }
    ]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleAddNew = () => {
        setShowModal(true);
    };

    const handleAddAttendance = (newEmployee) => {
        setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
        setShowModal(false);
    };

    const handleEdit = (id) => {
        // Implement logic to handle editing an employee
        console.log("Edit button clicked for employee ID:", id);
        // You can implement further logic to open a modal or navigate to an edit page
    };

    const handleDelete = (id) => {
        // Implement logic to handle deleting an employee
        const updatedEmployees = employees.filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="attendance-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>Attendance</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>

            <div className="addNew">
                <button onClick={handleAddNew}>+ New</button>
            </div>

            {showModal && <ModalForm handleAddAttendance={handleAddAttendance} toggleModal={toggleModal} />}

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Overtime</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.timeIn}</td>
                            <td>{employee.timeOut}</td>
                            <td>{employee.overTime}</td>
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

