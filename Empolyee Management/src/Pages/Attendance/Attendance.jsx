import React, { useState } from 'react';
import './Attendance.scss';
import Delete from '../../assets/icons8-delete-30.png';
import Edit from '../../assets/icons8-edit-24.png';

const Attendance = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedEmployeeId, setEditedEmployeeId] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: '',
        position: '',
        timeIn: '',
        timeOut: ''
    });
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', position: 'Manager', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { id: 2, name: 'Jane Smith', position: 'Developer', timeIn: '09:30 AM', timeOut: '06:00 PM' },
        { id: 3, name: 'Alice Johnson', position: 'Designer', timeIn: '10:00 AM', timeOut: '05:30 PM' },
        { id: 4, name: 'Bob Brown', position: 'HR', timeIn: '09:15 AM', timeOut: '06:15 PM' },
        { id: 5, name: 'Eve Williams', position: 'Accountant', timeIn: '09:45 AM', timeOut: '05:45 PM' }
    ]);

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedEmployeeId(id);
        const employeeToEdit = employees.find(employee => employee.id === id);
        setNewEmployee(employeeToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const updatedEmployees = employees.map(employee => {
                if (employee.id === editedEmployeeId) {
                    return { ...newEmployee };
                }
                return employee;
            });
            setEmployees(updatedEmployees);
        } else {
            setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
        }
        setNewEmployee({
            id: '',
            name: '',
            position: '',
            timeIn: '',
            timeOut: ''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedEmployeeId(null);
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
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Employee Name" value={newEmployee.name} onChange={handleInputChange} />
                    <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleInputChange} />
                    <input type="text" name="timeIn" placeholder="Time In" value={newEmployee.timeIn} onChange={handleInputChange} />
                    <input type="text" name="timeOut" placeholder="Time Out" value={newEmployee.timeOut} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Time In</th>
                        <th>Time Out</th>
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
