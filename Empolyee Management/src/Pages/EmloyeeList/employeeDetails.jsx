import React from 'react';
import './employeeDetails.scss';

const EmployeeDetailsModal = ({ isOpen, onClose, employee }) => {
    if (!isOpen || !employee) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Employee Details</h2>
                <div>
                    <label>Employee ID:</label>
                    <span>{employee.EmployeeID}</span>
                </div>
                <div>
                    <label>Name:</label>
                    <span>{`${employee.FirstName} ${employee.LastName}`}</span>
                </div>
                <div>
                    <label>Email:</label>
                    <span>{employee.Email}</span>
                </div>
                <div>
                    <label>Position:</label>
                    <span>{employee.PositionDescription}</span>
                </div>
                <div>
                    <label>Schedule:</label>
                    <span>{employee.ScheduleName}</span>
                </div>
                {/* Add more details here as needed */}
            </div>
        </div>
    );
};

export default EmployeeDetailsModal;
