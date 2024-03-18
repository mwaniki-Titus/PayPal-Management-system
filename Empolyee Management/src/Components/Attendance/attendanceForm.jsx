import React, { useState } from 'react';
import './attendanceForm.scss'

const ModalForm = ({ handleAddAttendance, toggleModal }) => {
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        position: '',
        timeIn: '',
        timeOut: '',
        overTime: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddAttendance(newEmployee);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={toggleModal}>&times;</span>
                <h2>Add New Attendance</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Employee Name" value={newEmployee.name} onChange={handleInputChange} required />
                    <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleInputChange} required />
                    <input type="text" name="timeIn" placeholder="Time In" value={newEmployee.timeIn} onChange={handleInputChange} required />
                    <input type="text" name="timeOut" placeholder="Time Out" value={newEmployee.timeOut} onChange={handleInputChange} required />
                    <input type="text" name="overTime" placeholder="Overtime" value={newEmployee.overTime} onChange={handleInputChange} required />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
