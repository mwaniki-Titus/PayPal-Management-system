import React, { useState } from 'react';
import './EmployeeList.scss';
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const EmployeeList = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedEmployeeId, setEditedEmployeeId] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: '',
        email: '',
        position: '',
        schedule: ''
    });
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Manager', schedule: 'Mon-Fri, 9:00 AM - 5:00 PM' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Developer', schedule: 'Mon-Fri, 9:30 AM - 6:00 PM' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', position: 'Designer', schedule: 'Mon-Fri, 10:00 AM - 5:30 PM' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com', position: 'HR', schedule: 'Mon-Fri, 9:15 AM - 6:15 PM' },
        { id: 5, name: 'Eve Williams', email: 'eve@example.com', position: 'Accountant', schedule: 'Mon-Fri, 9:45 AM - 5:45 PM' }
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
            email: '',
            position: '',
            schedule: ''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedEmployeeId(null);
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
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Employee Name" value={newEmployee.name} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleInputChange} />
                    <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleInputChange} />
                    <input type="text" name="schedule" placeholder="Schedule" value={newEmployee.schedule} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

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

export default EmployeeList;

