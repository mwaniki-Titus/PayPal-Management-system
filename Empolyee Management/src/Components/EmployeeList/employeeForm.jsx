import React, { useState } from 'react';
import './employeeForm.scss'

const EmployeeFormModal = ({ isOpen, onClose, onSubmit }) => {
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        position: '',
        schedule: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newEmployee);
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Employee Name" value={newEmployee.name} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleInputChange} />
                    <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleInputChange} />
                    <input type="text" name="schedule" placeholder="Schedule" value={newEmployee.schedule} onChange={handleInputChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeFormModal;
